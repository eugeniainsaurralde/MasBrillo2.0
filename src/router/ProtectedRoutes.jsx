import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let userRol = "admin";
  return <div>{userRol === "admin" ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default ProtectedRoutes;
