// context/ThemeContext.jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const themes = {
  light: {
    bg: "#fff5f8",      // Rosa casi blanco, muy limpio
    text: "#500724",    // Rosa extremadamente oscuro (casi negro-uvas) para máxima legibilidad
    card: "#ffffff",    // Cards blancas para que resalten sobre el fondo rosa suave
    border: "#f9a8d4",  // Rosa suave para bordes
    link: "#be185d"     // Rosa vibrante pero oscuro para los links
  },
  dark: {
    bg: "#1e1b2e",      // Se queda igual, ¡dijiste que está bien!
    text: "#fce7f3",
    card: "#2a2545",
    border: "#f472b6",
    link: "#f9a8d4"
  }
};

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const toggleTheme = () =>
    setMode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme: themes[mode],
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
