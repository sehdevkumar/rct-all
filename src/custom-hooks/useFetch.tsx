import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [isLoading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [data, setData] = useState<any | null>(null);
  const [refetch, setRefetch] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const startFetching = async () => {
      try {
        const result = await fetch(url, { signal });
        if (!result.ok) {
          throw new Error(`Error: ${result.statusText}`);
        }
        const data = await result.json();
        setData(data);
        setLoading(false);
        setRefetch(false);
      } catch (error:any) {
        if (error?.name !== "AbortError") {
          setLoading(false);
          setRefetch(false);
          setError(error);
        }
      }
    };

    if (refetch) {
      setLoading(true);
      startFetching();
    }

    return () => {
      controller.abort();
    };
  }, [url, refetch]);

  return { isLoading, error, data, setRefetch };
};

export default useFetch;
