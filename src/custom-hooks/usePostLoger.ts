import { useEffect, useRef, useState, useCallback } from "react";

export enum LoggerLevel {
  TRACE = "TRACE",
  DEBUG = "DEBUG",
  INFO = "INFO",
  LOG = "LOG",
  WARN = "WARN",
  ERROR = "ERROR",
  FATAL = "FATAL",
  OFF = "OFF",
}

export interface ServerInfo {
  port: string;
  ip: string;
  statusCode?: string;
  url?: string;
}

export interface LoggerInterface {
  userInfo?: string;
  tags?: string;
  level: LoggerLevel;
  lineNumber?: number;
  serverInfo?: ServerInfo;
  message: Array<number> | string | any | number;
  type?: string;
}

const MAX_QUEUE_SIZE = 1000;
const REQUEST_TIMEOUT = 5000;

export const usePostLogger = (
  url: string,
  indexType?: 'Dashboard',
  userName?: string,
  serverInfo?: ServerInfo
) => {
  const serverRef = useRef<ServerInfo | null>(serverInfo ?? null);
  const logQueue = useRef<LoggerInterface[]>([]);
  const [isSending, setSending] = useState(false);
  const abortController = useRef<AbortController | null>(null);

  const sendLogMessage = useCallback(
    async (message: LoggerInterface): Promise<boolean> => {
      abortController.current?.abort();
      abortController.current = new AbortController();

      try {
        const response: any = await Promise.race([
          fetch(url, {
            method: "POST",
            body: JSON.stringify(message),
            headers: { "Content-Type": "application/json" },
            signal: abortController.current.signal,
          }),
          new Promise((_, reject) =>
            setTimeout(
              () => reject(new Error("Request timeout")),
              REQUEST_TIMEOUT
            )
          ),
        ]);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return true;
      } catch (error) {
        console.error("Failed to send log:", error);
        return false;
      }
    },
    [url]
  );

  const sendNextLogMessage = useCallback(async (): Promise<void> => {
    if (logQueue.current.length === 0 || isSending) {
      return;
    }

    setSending(true);
    const message = logQueue.current[0]; // Peek the message

    await sendLogMessage(message);
    logQueue.current.shift(); // Only remove on success

    setSending(false);
  }, [isSending, sendLogMessage]);

  const log = useCallback(
    (
      level: LoggerLevel,
      message: any,
      apiUrl?: string,
      statusCode?: string
    ) => {
      if (logQueue.current.length >= MAX_QUEUE_SIZE) {
        console.warn("Logger queue size exceeded, dropping oldest message");
        logQueue.current.shift();
      }

      const logServer: ServerInfo = {
        port: serverRef.current?.port ?? "",
        ip: serverRef.current?.ip ?? "",
        statusCode,
        url: apiUrl,
      };

      const payload: LoggerInterface = {
        level,
        message,
        userInfo: userName,
        serverInfo: logServer,
        tags: "Frontend (Dashboard Application)",
        type: indexType ??  "Dashboard",
      };

      logQueue.current.push(payload);
      void sendNextLogMessage();
    },
    [userName, sendNextLogMessage]
  );

  const onInfo = useCallback(
    (message: any, apiUrl?: string, statusCode?: string) => {
      log(LoggerLevel.INFO, message, apiUrl, statusCode);
    },
    [log]
  );

  const onError = useCallback(
    (message: any, apiUrl?: string, statusCode?: string) => {
      log(LoggerLevel.ERROR, message, apiUrl, statusCode);
    },
    [log]
  );

  const onWarn = useCallback(
    (message: any, apiUrl?: string, statusCode?: string) => {
      log(LoggerLevel.WARN, message, apiUrl, statusCode);
    },
    [log]
  );

  const onDebug = useCallback(
    (message: any, apiUrl?: string, statusCode?: string) => {
      log(LoggerLevel.DEBUG, message, apiUrl, statusCode);
    },
    [log]
  );

  const setServerInfo = useCallback((logServer: ServerInfo) => {
    serverRef.current = logServer;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      abortController.current?.abort();
    };
  }, []);

  return { onWarn, onInfo, onDebug, onError, setServerInfo };
};
