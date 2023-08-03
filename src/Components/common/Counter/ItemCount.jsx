const ItemCount = ({ cantidad, setCantidad, agregarAlCarrito, stock }) => {
  return (
    <div className="container py-1 center">
      <div className="row">
        <div className="col-md-5">
          <div className="input-group">
            <input
              type="button"
              className="btn btn-secondary"
              id="btnGroupAddon"
              value="-"
              disabled={cantidad == 1}
              onClick={() => {
                setCantidad(cantidad - 1);
              }}
            />
            <input
              type="text"
              className="form-control"
              value={cantidad}
              onChange={() => {}}
            />
            <input
              type="button"
              className="btn btn-secondary"
              id="btnGroupAddon"
              value="+"
              disabled={cantidad == stock}
              onClick={() => {
                setCantidad(cantidad + 1);
              }}
            />
          </div>
          <div className="d-grid gap-2 pt-3">
            <input
              type="button"
              className="btn btn-secondary"
              value="Agregar al carrito"
              onClick={() => {
                agregarAlCarrito(cantidad);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
