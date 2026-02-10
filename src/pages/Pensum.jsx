import { useMemo } from "react";
import CursoCard from "../components/CursoCard";
import { puedeLlevarCurso } from "../utils/pensum.utils";
// IMPORTANTE: El nombre dentro de { } debe coincidir con el export del mock
import { pensumRNR } from "../data/cursos.mock";

function Pensum() {

  if (!pensumRNR || pensumRNR.length === 0) {
    return null; // 👈 no renderiza NADA
  }

  //const todosLosCursos = pensumRNR.flatMap(b => b.cursos);
  console.log("PensumRNR cargado:", pensumRNR); // Verificar que el pensum se carga correctamente

  // Aplanamos la lista de bloques a una lista de cursos para la lógica de requisitos
  const todosLosCursos = useMemo(() => {
    return pensumRNR.flatMap(bloque => bloque.cursos);
  }, []); // Se ejecuta solo una vez al cargar

  return (
    <div
      style={{
        padding: "1rem",
        maxWidth: "100vw",
        overflowX: "auto"
      }}
    >
      <h1 style={{ color: "#f472b6", marginBottom: "2rem" }}>🌸 Pensum RNR</h1>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          paddingBottom: "2rem",
          alignItems: "flex-start"
        }}
      >
        {pensumRNR.map(bloque => (
          <div
            key={bloque.semestre}
            style={{
              minWidth: "300px",
              maxWidth: "350px",
              flexShrink: 0   // 🔥 CLAVE
            }}
          >
            <h3 style={{ textAlign: "center", color: "#f9a8d4", marginBottom: "1rem" }}>
              {bloque.nombre}
            </h3>

            {bloque.cursos.map(curso => (
              <CursoCard
                key={curso.codigo}
                curso={curso}
                cursos={todosLosCursos}
                puedeLlevar={puedeLlevarCurso(curso, todosLosCursos)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pensum;