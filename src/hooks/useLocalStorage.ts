import { useState, useEffect } from "react";

function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (err) {
      console.log("error reading local storage key", err);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, storedValue);
    } catch (err) {
      console.log("error setting local storage key", err);
    }
  }, [key, storedValue]);
  return [storedValue, setStoredValue] as const;
}

export default useLocalStorage;
