import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <button
      type="button"
      className="btn btn-light position-relative text-bg-light"
    >
      <Link to="/cart" style={{ color: "black" }}>
        <BsCart4 size="3em" />
      </Link>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        4
      </span>
    </button>
  );
};

export default CartWidget;
