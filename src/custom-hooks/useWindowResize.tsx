import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [resize, setResize] = useState<UIEvent | undefined>();

  useEffect(() => {
    const ac = new AbortController();

    const handleResize = (ev: UIEvent) => {
      setResize(ev);
    };

    window.addEventListener("resize", handleResize, { signal: ac.signal });

    return () => {
        console.log("Will i run again")
      ac.abort();
    };
  }, []);

  return { resize };
};
