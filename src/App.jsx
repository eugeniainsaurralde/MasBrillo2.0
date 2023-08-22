import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./Components/pages/itemDetail/ItemDetailContainer";
import Cart from "./Components/pages/cart/Cart";
import Header from "./Components/layout/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/brand/:brandName" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<h1>404 - Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

/* import { Routes, Route } from "react-router-dom";
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
} */

export default App;
