import { useState, useEffect } from "react";

const ItemCount = (props) => {
  const [ItemStock, setItemStock] = useState(props.stock); //10
  const [Cantidad, setCantidad] = useState(props.initial); //1
  /* const [ItemAdd, setItemAdd]=useState(props.onAdd);//0 */

  const decrementarCantidad = (valor) => {
    if (valor > 0) {
      setCantidad(valor);
    }
  };
  const incrementarCantidad = (valor) => {
    if (valor <= ItemStock) {
      setCantidad(valor);
    }
  };
  const agregarProductos = () => {
    if (Cantidad <= ItemStock) {
      props.onAdd(Cantidad);
      setItemStock(ItemStock - Cantidad);
      setCantidad(ItemStock - Cantidad);
      /*  setItemAdd(ItemAdd+Cantidad) */
      /* addItem(item, Cantidad); */
    }
  };

  useEffect(() => {
    setItemStock(props.stock);
  }, [props.stock]);

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
              onClick={() => {
                decrementarCantidad(Cantidad - 1);
              }}
            />
            <input
              type="text"
              className="form-control"
              value={Cantidad}
              onChange={() => {}}
            />
            <input
              type="button"
              className="btn btn-secondary"
              id="btnGroupAddon"
              value="+"
              onClick={() => {
                incrementarCantidad(Cantidad + 1);
              }}
            />
          </div>
          <div className="d-grid gap-2 pt-3">
            <input
              type="button"
              className="btn btn-secondary"
              value="Agregar al carrito"
              onClick={() => {
                agregarProductos();
              }}
            />
          </div>
          {/* <p className="text-center">Productos seleccionados: {addItem}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
