import { useState, useEffect } from "react";

const useLocalStorage = () => {
  const tokenKey = "__appToken__";
  const themeKey = "__theme__";

  const [token, setTokenState] = useState<string | null>(() =>
    localStorage.getItem(tokenKey)
  );
  const [theme, setThemeState] = useState<"dark" | "light" | null>(
    () => localStorage.getItem(themeKey) as "dark" | "light" | null
  );

  useEffect(() => {
    if (token !== null) {
      localStorage.setItem(tokenKey, token);
    } else {
      localStorage.removeItem(tokenKey);
    }

    const handleStorageEvent = (event: StorageEvent) => {
      if (event.key === tokenKey) {
        setTokenState(event.newValue);
        window.location.reload()
      }
    };

    window.addEventListener("storage", handleStorageEvent);

    return () => {
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, [token]);

  useEffect(() => {
    if (theme !== null) {
      localStorage.setItem(themeKey, theme);
    } else {
      localStorage.removeItem(themeKey);
    }
  }, [theme]);

  const setToken = (newToken: string) => {
    setTokenState(newToken);
  };

  const removeToken = () => {
    setTokenState(null);
  };

  const setTheme = (newTheme: "dark" | "light") => {
    setThemeState(newTheme);
  };

  const removeTheme = () => {
    setThemeState(null);
  };

  return { token, theme, setTheme, removeTheme, removeToken, setToken };
};

export default useLocalStorage;
