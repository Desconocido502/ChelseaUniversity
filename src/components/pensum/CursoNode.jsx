function CursoNode({ data }) {
  return (
    <div
      style={{
        background: data.color,
        color: "white",
        padding: "10px",
        borderRadius: "10px",
        width: 180,
        textAlign: "center"
      }}
    >
      <strong>{data.nombre}</strong>
      <div style={{ fontSize: "0.85rem" }}>
        {data.creditos} créditos
      </div>
    </div>
  );
}

export default CursoNode;
