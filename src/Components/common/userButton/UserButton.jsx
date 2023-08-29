import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserButton = () => {
  return (
    <button
      type="button"
      className="btn btn-light position-relative text-bg-light"
    >
      <Link to="/dashBoard" style={{ color: "black" }}>
        <FaRegUser size="3em" />
      </Link>
    </button>
  );
};

export default UserButton;
