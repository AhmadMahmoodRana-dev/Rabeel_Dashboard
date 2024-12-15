import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const user = true;
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
