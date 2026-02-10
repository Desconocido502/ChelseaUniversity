function SemestreHeader({ texto, x }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: 0,
        fontWeight: "bold"
      }}
    >
      {texto}
    </div>
  );
}

export default SemestreHeader;
