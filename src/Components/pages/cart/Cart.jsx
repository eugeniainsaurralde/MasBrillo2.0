import { Link } from "react-router-dom";

const Cart = ({ cart, clear, deleteById, getTotalQuantity, getTotalPrice }) => {
  let quantity = getTotalQuantity();
  let price = getTotalPrice();

  return (
    <>
      {cart.length > 0 ? (
        <div className="card m-3 p-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Button</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((elemento) => {
                return (
                  <tr key={elemento.id} style={{ height: "5px" }}>
                    <td scope="row" className="object-fit-scale">
                      {" "}
                      <img
                        src={elemento.imagen}
                        className="img-fluid rounded img-thumbnail object-fit-scale"
                        alt={elemento.nombre}
                      />
                    </td>
                    <td>
                      <h1>{elemento.nombre}</h1>
                    </td>
                    <td>
                      {" "}
                      <h1>{elemento.quantity}</h1>
                    </td>
                    <td>
                      <h1>{elemento.precio}</h1>
                    </td>
                    <td>
                      <button onClick={() => deleteById(elemento.id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <th scope="row">Total:</th>
                <td></td>
                <td>
                  <h1>{quantity}</h1>
                </td>
                <td>
                  <h1>{price}</h1>
                </td>
                <td>
                  {" "}
                  <button onClick={clear}>Limpiar carrito</button>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="/checkout">
            <button>Finalizar compra</button>
          </Link>
        </div>
      ) : (
        <h1>El carrito esta vacio</h1>
      )}
    </>
  );
};

export default Cart;
