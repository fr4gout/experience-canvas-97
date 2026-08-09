import { useEffect, useState } from "react";

/** True on devices with a precise pointer (mouse / trackpad). */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    setFine(query.matches);
    const onChange = (event: MediaQueryListEvent) => setFine(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return fine;
}
