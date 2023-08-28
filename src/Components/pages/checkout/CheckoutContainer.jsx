import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import "../../common/Style.css";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [userData, setUserData] = useState({ name: "", phone: "", email: "" });
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    //crear una orden de compra
    let orderCollection = collection(db, "Orders");
    addDoc(orderCollection, order).then((resolve) => setOrderId(resolve.id));

    //Modificar stock de TODOS los productos
    //OPCION 1
    /*  let refDoc= doc(db, "Productos", id)
    updateDoc(refDoc, {stock: } ) */
    //OPCION 2
    cart.forEach((element) => {
      let refDoc = doc(db, "Productos", element.id);
      updateDoc(refDoc, { stock: element.stock - element.quantity });
    });
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      orderId={orderId}
    />
  );
};

export default CheckoutContainer;
