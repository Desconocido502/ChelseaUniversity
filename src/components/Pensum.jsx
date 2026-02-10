import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import CursoNode from "../components/pensum/CursoNode";
import PensumLegend from "../components/pensum/PensumLegend";
import { cursos } from "../data/cursos.mock";
import {
  puedeLlevarCurso,
  colorCurso
} from "../utils/pensum.utils"

const nodeTypes = {
  curso: CursoNode
};

function Pensum() {
  const nodes = cursos.map((curso, index) => ({
    id: curso.id,
    type: "curso",
    position: {
      x: curso.semestre * 260,
      y: index * 120
    },
    data: {
      nombre: curso.nombre,
      creditos: curso.creditos,
      color: colorCurso(curso, cursos)
    }
  }));

  const edges = cursos.flatMap(curso =>
    curso.prerequisitos.map(pre => ({
      id: `${pre}-${curso.id}`,
      source: pre,
      target: curso.id
    }))
  );

  return (
    <div style={{ height: "90vh" }}>
      <h1>📚 Pensum de la carrera</h1>
      <PensumLegend />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}

export default Pensum;
