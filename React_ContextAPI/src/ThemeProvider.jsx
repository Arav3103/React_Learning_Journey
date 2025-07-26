import React, { useMemo, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [isLogged, setIsLogged] = useState(true);
  const toggleTheme = () => setTheme((prev) => !prev);
  const toggleLogin = () => setIsLogged((prev) => !prev);

  // const memoObj = { theme, toggleTheme, isLogged, toggleLogin };

  const memoObj = useMemo(() => {
    return { theme, toggleTheme, isLogged, toggleLogin };
  }, [theme, isLogged]);

  return (
    <ThemeContext.Provider value={memoObj}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
