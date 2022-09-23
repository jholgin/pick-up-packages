import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CreateOrder from "../pages/Orders/Create/CreateOrder";
import EditOrder from "../pages/Orders/Edit/EditOrder";
import ListOrder from "../pages/Orders/ListOrders/ListOrder";
import RegisterUser from "../pages/Register/RegisterUser";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import PublicRoutes from "./PublicRoutes/PublicRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterUser />} />
          </Route>
          <Route
            element={<PrivateRoutes isAllowed={true} redirectTo={"/login"} />}
          >
            <Route path="/order/list" element={<ListOrder />} />
            <Route path="/order/create" element={<CreateOrder />} />
            <Route path="/order/edit" element={<EditOrder />} />
          </Route>

          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
