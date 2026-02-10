function FiltroCursos({ filtro, setFiltro }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label>
        <strong>Filtrar por estado:</strong>{" "}
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="aprobado">Aprobados</option>
          <option value="pendiente">Pendientes</option>
          <option value="cursando">Cursando</option>
        </select>
      </label>
    </div>
  );
}

export default FiltroCursos;
