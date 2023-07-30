import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState("light");

  function handleTheme(e) {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem(
      "theme",
      JSON.stringify(themeName === "light" ? "dark" : "light")
    );
  }

  useEffect(() => {
    const storedThemeName = JSON.parse(localStorage.getItem("theme"));
    setThemeName(storedThemeName);
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ handleTheme, themeName }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export { ThemeContext, ThemeContextProvider };
