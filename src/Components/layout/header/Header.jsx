import { NavLink } from "react-router-dom";
import "./Header.css";
import { Outlet } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";

const Header = () => {
  return (
    <header>
      <nav className="header__nav">
        <NavLink to="/" className="container__img">
          <img
            src="https://res.cloudinary.com/eugedev/image/upload/v1690320676/logoMasBrillo_crszeg.jpg"
            alt="logo"
          />
        </NavLink>
        <div>
          <ul className="header__items">
            <li>
              <NavLink to="">Dior</NavLink>
            </li>
            <li>
              <NavLink to={""}>Kyle</NavLink>
            </li>
            <li>
              <NavLink to="">Natura</NavLink>
            </li>
          </ul>
        </div>
        <div className="container__img">
          <CartWidget />
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
