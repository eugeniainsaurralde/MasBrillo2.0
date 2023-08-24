import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <button
      type="button"
      className="btn btn-light position-relative text-bg-light"
    >
      <Link to="/cart" style={{ color: "black" }}>
        <BsCart4 size="3em" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {total}
        </span>
      </Link>
    </button>
  );
};

export default CartWidget;
