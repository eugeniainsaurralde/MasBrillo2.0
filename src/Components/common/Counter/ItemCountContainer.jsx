import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ agregarAlCarrito, stock }) => {
  const [cantidad, setCantidad] = useState(1);
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
