import { Link } from "react-router-dom";
import "../itemList/Item.css";
import ItemCountContainer from "../../common/Counter/ItemCountContainer";

const ItemDetail = ({ detail, agregarAlCarrito, counter }) => {
  /*const addItem = useContext(CartContext);
    const onAdd = (counter) => {
    addItem(detail, counter);
  }; */

  return (
    <div className="card mb-3 col-md-8">
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src={detail.imagen}
            className="img-fluid rounded-start"
            alt={detail.nombre}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h2 className="card-title text-center">{detail.nombre}</h2>
            <p className="card-text text-center">{detail.descripcion}</p>
            <p className="card-text text-center">
              <small className="text-muted">{detail.brand}</small>
            </p>
            <p className="card-text text-center">${detail.precio}</p>
            {counter === 0 ? (
              <ItemCountContainer
                agregarAlCarrito={agregarAlCarrito}
                stock={detail.stock}
              />
            ) : (
              <Link to={"/cart"} className="btn-propio-secundario">
                Ir al Carrito
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
