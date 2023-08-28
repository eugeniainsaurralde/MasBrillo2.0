import { Link } from "react-router-dom";

const Cart = ({ cart, clear, deleteById, getTotalQuantity, getTotalPrice }) => {
  let quantity = getTotalQuantity();
  let price = getTotalPrice();

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h1>{elemento.nombre}</h1>
            <h1>{elemento.quantity}</h1>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <>
          <button onClick={clear}>Limpiar carrito</button>
          <Link to="/checkout">
            <button>Finalizar compra</button>
          </Link>
        </>
      )}

      <h1>cantidad: {quantity}</h1>
      <h1>precio: {price}</h1>
    </div>
  );
};

export default Cart;
