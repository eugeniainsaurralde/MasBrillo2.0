import { Route, Routes } from "react-router-dom";
import Header from "../Components/layout/header/Header";

import { routes } from "./routes";
import ProtectedRoutes from "./ProtectedRoutes";
import DashBoard from "../Components/pages/dashBoard/DashBoard";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        {routes.map(({ key, path, Element }) => (
          <Route key={key} path={path} element={<Element />} />
        ))}
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashBoard" element={<DashBoard />} />
      </Route>

      <Route path="*" element={<h1>404 - Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
