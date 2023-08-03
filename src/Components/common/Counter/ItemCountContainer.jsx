import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ agregarAlCarrito, stock }) => {
  const [cantidad, setCantidad] = useState(1);
  return (
    <div>
      <ItemCount
        cantidad={cantidad}
        setCantidad={setCantidad}
        agregarAlCarrito={agregarAlCarrito}
        stock={stock}
      />
    </div>
  );
};

export default ItemCountContainer;
