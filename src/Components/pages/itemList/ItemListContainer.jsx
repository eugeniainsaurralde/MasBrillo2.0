import { useEffect, useState } from "react";
import Item from "./Item";
import { Productos } from "../../common/Productos";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(Productos);
  }, []);

  return (
    <div className="container-xxl ">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 py-3">
            <Item id={item.id} nombre={item.nombre} imagen={item.imagen} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
