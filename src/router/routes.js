import ItemListContainer from "../Components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../Components/pages/itemDetail/ItemDetailContainer";
import CheckoutContainer from "../Components/pages/checkout/CheckoutContainer";
import CartContainer from "../Components/pages/cart/CartContainer";
import DashBoard from "../Components/pages/dashBoard/DashBoard";

export const routes = [
  {
    key: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    key: "category",
    path: "/brand/:brandName",
    Element: ItemListContainer,
  },
  {
    key: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    key: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    key: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    key: "dashBoard",
    path: "/dashBoard",
    Element: DashBoard,
  },
];
