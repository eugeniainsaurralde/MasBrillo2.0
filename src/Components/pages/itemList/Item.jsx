import "../../common/Style.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, imagen }) => {
  return (
    <div className="card align-items-center ">
      <img
        src={imagen}
        className="card-img-top imagenesProductos"
        alt={nombre}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{nombre}</h5>
      </div>
      <Link
        to={`/itemDetail/${id}`}
        className="btn-propio-secundario text-center"
      >
        Ver mas
      </Link>
    </div>
  );
};

export default Item;
