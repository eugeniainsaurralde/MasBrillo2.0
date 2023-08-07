import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Productos } from "../../common/Productos";
import { CartContext } from "../../common/Context";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const [counter, setCounter] = useState(0);
  //Por revisar
  const addItem = useContext(CartContext);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...detail,
      quantity: cantidad,
    };
    setCounter(cantidad);
    addItem(detail, cantidad);
  };

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      resolve(Productos.find((prod) => prod.id === parseInt(id)) || []);
    });

    promesa.then((resultado) => {
      setDetail(resultado);
    });
  }, [id]);

  return (
    <ItemDetail
      detail={detail}
      agregarAlCarrito={agregarAlCarrito}
      counter={counter}
    />
  );
};

export default ItemDetailContainer;
