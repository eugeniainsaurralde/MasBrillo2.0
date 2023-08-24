import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore ";

import { Productos } from "../../common/Productos";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { brandName } = useParams();

  useEffect(() => {
    let ref = collection(db, "Productos");
    getDocs(ref).then((resolve) => {
      console.log(resolve);
      /*    let arrayProductos = resolve.docs.map(products => {
        return { ...product.data(), id: product.id };
      });
      console.log(arrayProductos); */
    });
    /* let categoryBrand = Productos.filter(
      (element) => element.brand === brandName
    );

    const promise = new Promise((resolve, reject) => {
      resolve(brandName ? categoryBrand : Productos);
    });

    promise
      .then((resultado) => setItems(resultado))
      .catch((error) => console.log(error)); */
  }, [brandName]);

  if (items.length === 0) {
    return <h1>cargando..</h1>;
  }

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
