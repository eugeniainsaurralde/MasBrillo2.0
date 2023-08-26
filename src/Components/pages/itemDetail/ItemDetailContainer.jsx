import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemDetail from "./ItemDetail";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams(); //recordar que el id siempre llega como string
  const [counter, setCounter] = useState(0);

  const { addItem, getQuantityById } = useContext(CartContext);

  const quantityInCart = getQuantityById(id);

  useEffect(() => {
    let refCollection = collection(db, "Productos");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((resolve) =>
      setDetail({ ...resolve.data(), id: resolve.id })
    );
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...detail,
      quantity: cantidad,
    };
    setCounter(cantidad);
    addItem(data);
  };

  return (
    <ItemDetail
      detail={detail}
      agregarAlCarrito={agregarAlCarrito}
      counter={counter}
      quantityInCart={quantityInCart}
    />
  );
};

export default ItemDetailContainer;
