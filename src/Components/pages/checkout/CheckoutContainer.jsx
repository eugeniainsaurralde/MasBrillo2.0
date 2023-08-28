import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
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

    let orderCollection = collection(db, "Orders");
    addDoc(orderCollection, order).then((resolve) => setOrderId(resolve.id));
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
