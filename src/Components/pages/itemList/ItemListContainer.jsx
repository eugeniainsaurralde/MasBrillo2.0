import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { brandName } = useParams();

  useEffect(() => {
    let consult;

    let productsCollection = collection(db, "Productos");

    if (!brandName) {
      consult = productsCollection;
    } else {
      consult = query(productsCollection, where("brand", "==", brandName));
    }

    getDocs(consult).then((resolve) => {
      let arrayProductos = resolve.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      console.log(arrayProductos);
      setItems(arrayProductos);
    });
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
