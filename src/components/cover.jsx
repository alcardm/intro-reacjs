function Cover() {
  // Objeto JavaScript que define las propiedades a aplicar como estilo
  let estiloCover = {
    background: "#282c34",
    color: "#fff",
    border: "0.2em solid var(--bs-orange)",
  };
  return (
    <div className="px-3" style={estiloCover}>
      <h1>Ruta 2.</h1>
      <p className="lead">
        Cubre: Propiedades aplicadas como estilos (ver el componente) y Rutas.
      </p>
    </div>
  );
}
export default Cover;
