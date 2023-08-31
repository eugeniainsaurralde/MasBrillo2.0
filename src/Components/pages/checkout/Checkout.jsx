import { Link } from "react-router-dom";

const Checkout = ({ handleSubmit, handleChange, orderId }) => {
  return (
    <>
      {orderId ? (
        <h1>Su numero de orden es: {orderId}</h1>
      ) : (
        <form
          className="container card col-xl-5 align-items-center p-4"
          onSubmit={handleSubmit}
        >
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={{ backgroundColor: "#d4bdbd", color: "white" }}
            >
              Nombre
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={{ backgroundColor: "#d4bdbd", color: "white" }}
            >
              Celular
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Phone"
              aria-describedby="basic-addon1"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={{ backgroundColor: "#d4bdbd", color: "white" }}
            >
              Email
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Email"
              aria-describedby="basic-addon1"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div style={{ width: "60%", margin: "auto" }}>
            <button
              type="submit"
              className="btn btn-propio-secundario text-nowrap"
            >
              Enviar
            </button>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-propio-secundario text-nowrap "
              >
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      )}
    </>
  );
};

export default Checkout;
