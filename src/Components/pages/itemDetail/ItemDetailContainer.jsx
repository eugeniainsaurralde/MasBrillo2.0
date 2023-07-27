import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Productos } from "../../common/Productos";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos.find((prod) => prod.id === parseInt(id)) || []);
      }, 2000);
    });

    promesa.then((resultado) => {
      setDetail(resultado);
    });
  }, [id]);

  return (
    <div className="container">
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;
