const Checkout = ({ submitFunction, inputFunction }) => {
  return (
    <form
      className="container card col-xl-5 align-items-center p-4"
      onSubmit={submitFunction}
    >
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="basic-addon1"
          style={{ backgroundColor: "#d4bdbd", color: "white" }}
        >
          UserName
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="name"
          onChange={inputFunction}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="basic-addon1"
          style={{ backgroundColor: "#d4bdbd", color: "white" }}
        >
          Password
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="password"
          onChange={inputFunction}
        />
      </div>

      <div style={{ width: "60%", margin: "auto" }}>
        <button className="btn btn-propio-secundario text-nowrap">
          Enviar
        </button>
        <button
          type="button"
          className="btn btn-propio-secundario text-nowrap "
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default Checkout;
