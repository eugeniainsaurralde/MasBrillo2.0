import { useEffect, useState } from "react";
import Item from "./Item";
import { Productos } from "../../common/Productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { brandName } = useParams();

  useEffect(() => {
    let categoryBrand = Productos.filter(
      (element) => element.brand === brandName
    );

    const promise = new Promise((resolve, reject) => {
      resolve(brandName ? categoryBrand : Productos);
    });

    promise
      .then((resultado) => setItems(resultado))
      .catch((error) => console.log(error));
    /*     setItems(Productos); */
  }, [brandName]);

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
