import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header__nav">
        <div className="container__img">
          <a href="">
            <img
              src="https://res.cloudinary.com/eugedev/image/upload/v1690320676/logoMasBrillo_crszeg.jpg"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <ul className="header__items">
            <li>
              <NavLink to="/servicios">Servicios Disponibles</NavLink>
              <ul>
                <li>
                  <NavLink to="/servicios/pestañas">Pestañas</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios/cejas">Cejas</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios/unas">Uñas</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios/depilacion">Depilacion</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/cuidados">Cuidados</NavLink>
            </li>
            <li>
              <NavLink to={"/carrito"}>Carrito</NavLink>
            </li>
            <li>
              <NavLink to="/contactame">Contactame</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">About Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="container__img">
          <a href="">
            <img
              src={
                "https://res.cloudinary.com/eugedev/image/upload/v1690320676/carritoIcono_m1wir6.jpg"
              }
              alt="carrito"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
