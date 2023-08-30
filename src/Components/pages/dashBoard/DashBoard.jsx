import { db } from "../../../firebaseConfig";
import { Productos } from "../../common/Productos";
import { addDoc, collection } from "@firebase/firestore";

const DashBoard = () => {
  const rellenar = () => {
    let refCollection = collection(db, "Productos");
    Productos.forEach((prod) => {
      addDoc(refCollection, prod);
    });
  };

  return (
    <div>
      <h1>Proxima interfaz para el administrador</h1>
      <button onClick={rellenar}>Rellenar base de datos</button>
    </div>
  );
};

export default DashBoard;
