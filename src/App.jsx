import { useEffect } from "react"; // 1. Importa useEffect
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

import Pensum from "./pages/Pensum";
import Cursos from "./pages/Cursos";
import Simulador from "./pages/Simulador";

function App() {
  const { theme, toggleTheme, mode } = useTheme();

  // 2. Este efecto aplica el color al body real del navegador
  useEffect(() => {
    document.body.style.backgroundColor = theme.bg;
    document.body.style.margin = "0"; // Elimina márgenes fantasma
    document.body.style.transition = "background-color 0.3s ease";
  }, [theme.bg]);

  return (
    <HashRouter>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: theme.bg,
          color: theme.text,
          padding: "1.5rem",
          boxSizing: "border-box",
          transition: "all 0.3s ease"
        }}
      >
        <header style={{ marginBottom: "2rem", position: "relative" }}>
          <h1 style={{ margin: 0 }}>🎓 Plataforma Académica</h1>

          <nav style={{ display: "flex", gap: "1.2rem", margin: "1rem 0" }}>
            <Link style={{ color: theme.link, textDecoration: "none", fontWeight: "bold" }} to="/">Pensum</Link>
            <Link style={{ color: theme.link, textDecoration: "none", fontWeight: "bold" }} to="/cursos">Cursos</Link>
            <Link style={{ color: theme.link, textDecoration: "none", fontWeight: "bold" }} to="/simulador">Simulador</Link>
          </nav>

          <button
            onClick={toggleTheme}
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              backgroundColor: theme.card,
              border: `2px solid ${theme.border}`,
              color: theme.text,
              padding: "0.6rem 1rem",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {mode === "dark" ? "🌸 Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </header>

        {/* 👇 AQUÍ VA EL MAIN */}
        <main
          style={{
            width: "100vw",
            overflowX: "hidden"
          }}
        >
          <Routes>
            <Route path="/" element={<Pensum />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/simulador" element={<Simulador />} />
          </Routes>
        </main>
      </div>
    </HashRouter>

  );
}

export default App;