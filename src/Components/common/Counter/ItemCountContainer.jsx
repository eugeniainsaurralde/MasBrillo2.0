import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({
  agregarAlCarrito,
  stock,
  quantityInCart = 1, //unicamente la prop va a tomar el valor de 1 si lo que me llega es undifined. P.J: si me llega false ese sera el valor, no 1.
}) => {
  const [cantidad, setCantidad] = useState(quantityInCart);
  return (
    <ItemCount
      cantidad={cantidad}
      setCantidad={setCantidad}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    />
  );
};

export default ItemCountContainer;
