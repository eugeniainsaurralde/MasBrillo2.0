import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../common/Context";
import "../itemList/Item.css";
import ItemCount from "../../common/Counter/ItemCount";

/* const ImagesProductos= require.context('../Pictures',true) */

const ItemDetail = ({ detail }) => {
  const addItem = useContext(CartContext);
  const [counter, setCounter] = useState(0);

  const onAdd = (counter) => {
    setCounter(counter);
    addItem(detail, counter);
  };

  return (
    <div className="card mb-3 border-danger" style={{ maxWidth: 740 }}>
      <div className="row g-0">
        <div className="col-md-6">
          {/*   <img src= {ImagesProductos(`./${detail.imagen}.jpg`)} className="img-fluid rounded-start" alt={detail.nombre}/> */}
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
              <small className="text-muted">{detail.marca}</small>
            </p>
            <p className="card-text text-center">${detail.precio}</p>
            {/* <ItemCount stock={detail.stock} initial= {1} onAdd={onAdd}/> */}
            {counter === 0 ? (
              <ItemCount stock={detail.stock} initial={1} onAdd={onAdd} />
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
