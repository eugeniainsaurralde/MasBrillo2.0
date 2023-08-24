import { useState } from "react";
import "../../common/Style.css";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const [userData, setUserData] = useState({ name: "", password: "" });

  const submitFunction = (evento) => {
    evento.preventDefault();
    console.log(userData);
  };

  const inputFunction = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <Checkout inputFunction={inputFunction} submitFunction={submitFunction} />
  );
};

export default CheckoutContainer;
