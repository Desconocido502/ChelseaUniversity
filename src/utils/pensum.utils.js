export function cursosAprobados(cursos) {
  return cursos
    .filter(c => c.estado === "aprobado")
    .map(c => c.id);
}

export function puedeLlevarCurso(curso, cursos) {
  const aprobados = cursosAprobados(cursos);
  return curso.prerequisitos.every(p => aprobados.includes(p));
}

export function colorCurso(curso, cursos) {
  if (curso.estado === "aprobado") return "#4caf50";
  if (puedeLlevarCurso(curso, cursos)) return "#2196f3";
  return "#bdbdbd";
}
