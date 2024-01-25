import { createContext, useState } from "react";

// Context has been created
const ThemeContext = createContext();

// Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
