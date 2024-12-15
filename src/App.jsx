
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoute";
import PrivateRoutes from "./routes/PrivateRoute";
import Home from "./Pages/dashboard/Home";
import Testing from "./Pages/dashboard/Testing";

export default function App() {
  return (
    <div className="flex w-full h-screen bg-black">
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<h1>login</h1>} />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/testing" element={<Testing />} />
        </Route>
      </Routes>
    </div>
  );
}
