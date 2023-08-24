import { Link } from "react-router-dom";
import "../../common/Style.css";
import ItemCountContainer from "../../common/Counter/ItemCountContainer";

const ItemDetail = ({ detail, agregarAlCarrito, counter, quantityInCart }) => {
  /*const addItem = useContext(CartContext);
    const onAdd = (counter) => {
    addItem(detail, counter);
  }; */

  return (
    <div
      key={detail.id}
      className="container card mb-3 col-xl-6 px-0 align-items-center"
    >
      <div className="row align-items-center g-0">
        <div className="col-md-6">
          <img
            src={detail.imagen}
            className="img-fluid rounded"
            alt={detail.nombre}
          />
        </div>
        <div className="col-md-6 ">
          <div className="card-body">
            <h2 className="card-title text-center mb-5">{detail.nombre}</h2>
            <p className="card-text text-center mb-3">{detail.descripcion}</p>
            <p className="card-text text-center mb-5">
              <small className="text-muted">{detail.marca}</small>
            </p>
            <p className="card-text text-center mb-5">${detail.precio}</p>
            <div>
              {counter === 0 ? (
                <ItemCountContainer
                  agregarAlCarrito={agregarAlCarrito}
                  stock={detail.stock}
                  quantityInCart={quantityInCart}
                />
              ) : (
                <div className="container">
                  <div className="row justify-content-center">
                    <Link
                      to={"/cart"}
                      className="btn-propio-secundario text-center"
                    >
                      Ir al Carrito
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
