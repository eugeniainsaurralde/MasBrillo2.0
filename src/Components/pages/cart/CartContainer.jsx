import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clear, deleteById, getTotalQuantity, getTotalPrice } =
    useContext(CartContext);

  return (
    <Cart
      cart={cart}
      clear={clear}
      deleteById={deleteById}
      getTotalQuantity={getTotalQuantity}
      getTotalPrice={getTotalPrice}
    />
  );
};

export default CartContainer;
