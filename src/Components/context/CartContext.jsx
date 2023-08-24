import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    if (isInCart(item.id)) {
      let producto = cart.find((x) => x.id === item.id);
      cart[cart.indexOf(producto)].quantity = item.quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
    }
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    const newArray = cart.filter((x) => x.id !== id);
    setCart(newArray);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => (total += item.quantity), 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => (total += item.precio * item.quantity),
      0
    );
  };

  const getQuantityById = (id) => {
    let producto = cart.find((x) => x.id === +id); //el + es para transformarlo de string a number
    //return producto ? producto.quantity : undefined;
    //esto es necesario porque en el caso de que producto sea undifined NO se le puede pedir una propiedad porque se rompe el codigo,
    //para evitar eso se pregunta (producto es truty? si lo es retorna producto.quantity, si no lo es retorna undifined para que
    //en itemCountContainer se le asigne automticamente el valor 1) Una form mas optimmizada de escribirlo seria:
    return producto?.quantity;
  };

  let data = {
    cart,
    addItem,
    clear,
    deleteById,
    getTotalQuantity,
    getTotalPrice,
    getQuantityById,
  };
  return <CartContext.Provider value={data}> {children}</CartContext.Provider>;
};

export default CartContextComponent;
