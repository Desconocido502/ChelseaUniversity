import { useMemo } from "react";
import { pensumRNR } from "../data/cursos.mock";
import CursoCard from "../components/CursoCard";
import { puedeLlevarCurso } from "../utils/pensum.utils";

function Cursos() {
  // 🔹 Aplanamos todos los cursos del pensum
  const cursos = useMemo(() => {
    return pensumRNR.flatMap(bloque => bloque.cursos);
  }, []);

  // 🛑 Seguridad: si no hay cursos, no renderizamos nada
  if (!cursos || cursos.length === 0) {
    return null;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#f472b6", marginBottom: "1.5rem" }}>
        📚 Cursos de la carrera
      </h2>

      {cursos.map(curso => (
        <CursoCard
          key={curso.codigo}
          curso={curso}
          cursos={cursos}
          puedeLlevar={puedeLlevarCurso(curso, cursos)}
        />
      ))}
    </div>
  );
}

export default Cursos;
