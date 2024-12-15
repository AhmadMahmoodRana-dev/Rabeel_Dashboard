import { Navigate, Outlet } from "react-router-dom";
import Layout from "@/Pages/dashboard/Layout";

const PrivateRoutes = () => {
  const user = true;
  return user ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
