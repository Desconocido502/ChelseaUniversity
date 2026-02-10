import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function CursoCard({ curso, cursos, puedeLlevar }) {
  const [abierto, setAbierto] = useState(false);
  const { theme, mode } = useTheme();

  // --- LÓGICA DE NEGOCIO (Mantenida del código viejo) ---
  const prereqs = curso.prerequisitos.map(cod =>
    cursos.find(c => c.codigo === cod)
  );

  const postreqs = cursos.filter(c =>
    c.prerequisitos.includes(curso.codigo)
  );

  // --- LÓGICA DE COLORES (Mezcla de estado académico + tema) ---
  let borderColor = theme.border;
  let badgeColor = theme.border;

  if (curso.aprobado) {
    borderColor = "#ec4899";
    badgeColor = "#ec4899";
  } else if (puedeLlevar) {
    borderColor = mode === "dark" ? "#f472b6" : "#db2777";
    badgeColor = mode === "dark" ? "#f472b6" : "#db2777";
  } else {
    borderColor = mode === "dark" ? "#374151" : "#d1d5db";
    badgeColor = mode === "dark" ? "#374151" : "#d1d5db";
  }

  return (
    <div
      onClick={() => setAbierto(!abierto)}
      style={{
        backgroundColor: theme.card,
        border: `2px solid ${borderColor}`,
        borderRadius: "14px",
        padding: "1rem",
        marginBottom: "1.2rem",
        color: theme.text,
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: mode === "light" ? "0 4px 10px rgba(0,0,0,0.05)" : "none",
        // 🔥 ALTURA FIJA EXACTA
        height: abierto ? "auto" : "180px", // Fija cuando está cerrada
        maxHeight: abierto ? "500px" : "180px", // Límite cuando está abierta
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <span style={{ fontWeight: "bold", opacity: 0.8 }}>{curso.codigo}</span>
        <span
          style={{
            backgroundColor: badgeColor,
            padding: "2px 10px",
            borderRadius: "8px",
            fontSize: "0.7rem",
            fontWeight: "bold",
            color: "#fff"
          }}
        >
          {curso.tipo === "obligatorio" ? "OBLIGATORIO" : "SELECTIVO"}
        </span>
      </div>

      {/* Nombre - con altura fija y ellipsis */}
      <h3 
        style={{ 
          margin: "0.5rem 0 0.3rem 0",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          minHeight: "2.4em",
          lineHeight: "1.2em",
          flexShrink: 0
        }}
      >
        {curso.nombre}
      </h3>

      <p style={{ fontSize: "0.85rem", opacity: 0.8, flexShrink: 0 }}>
        Créditos: {curso.creditos}
      </p>

      {/* Acordeón (Detalles) */}
      {abierto && (
        <div
          style={{
            marginTop: "1rem",
            borderTop: `1px solid ${theme.border}`,
            paddingTop: "0.75rem",
            fontSize: "0.85rem",
            maxHeight: "250px",
            overflowY: "auto",
            flex: 1
          }}
        >
          <div>
            <strong>📌 Prerrequisitos</strong>
            {prereqs.length === 0 ? (
              <p style={{ opacity: 0.6, margin: "4px 0" }}>Ninguno</p>
            ) : (
              prereqs.map(p => (
                <p key={p.codigo} style={{ margin: "4px 0" }}>
                  {p.codigo} – {p.nombre}
                </p>
              ))
            )}
          </div>

          <div style={{ marginTop: "0.6rem" }}>
            <strong>📌 Postrequisitos</strong>
            {postreqs.length === 0 ? (
              <p style={{ opacity: 0.6, margin: "4px 0" }}>Ninguno</p>
            ) : (
              postreqs.map(p => (
                <p key={p.codigo} style={{ margin: "4px 0" }}>
                  {p.codigo} – {p.nombre}
                </p>
              ))
            )}
          </div>
        </div>
      )}

      {/* Alerta de bloqueo - siempre al final */}
      <div style={{ marginTop: "auto", flexShrink: 0 }}>
        {!puedeLlevar && !curso.aprobado && (
          <p
            style={{
              marginTop: "0.6rem",
              fontSize: "0.75rem",
              color: "#f87171",
              fontWeight: "bold"
            }}
          >
            🔒 Bloqueado por prerrequisitos
          </p>
        )}
      </div>
    </div>
  );
}

export default CursoCard;