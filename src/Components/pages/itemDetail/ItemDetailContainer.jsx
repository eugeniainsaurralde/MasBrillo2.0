import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Productos } from "../../common/Productos";
import { CartContext } from "../../context/CartContext";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams(); //recordar que el id siempre llega como string
  const [counter, setCounter] = useState(0);

  const { addItem, getQuantityById } = useContext(CartContext);

  const quantityInCart = getQuantityById(id);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      resolve(Productos.find((prod) => prod.id === parseInt(id)) || []);
    });

    promesa.then((resultado) => {
      setDetail(resultado);
    });
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
