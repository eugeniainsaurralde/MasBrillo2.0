import { Route, Routes } from "react-router-dom";
import Header from "../Components/layout/header/Header";

import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        {routes.map(({ key, path, Element }) => (
          <Route key={key} path={path} element={<Element />} />
        ))}
      </Route>
      <Route path="*" element={<h1>404 - Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
