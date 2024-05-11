import { useState, useEffect } from "react";

// This custom hooks gets the storage key of the value you want to save in the local storage + the value you want to assign it. You can use this hook to initialize a value or update it. It can also recieve a fallback state which I use for the initial values shown on the app when the user hasn't edited/updated any values.

const useLocalStorage = (
  storageKey: string,
  fallbackState?: { [key: string]: string }
) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)!) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
