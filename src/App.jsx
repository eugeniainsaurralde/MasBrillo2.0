import { Routes, Route } from "react-router-dom";
import Header from "./Components/layout/header/Header";
import ItemListContainer from "./Components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./Components/pages/itemDetail/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/carrito"} element={<ItemListContainer />} />
        <Route path={"/carrito/:id"} element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
