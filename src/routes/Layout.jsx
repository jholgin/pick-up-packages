import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CreateOrder from "../pages/Orders/Create/CreateOrder";
import EditOrder from "../pages/Orders/Edit/EditOrder";
import ListOrder from "../pages/Orders/ListOrders/ListOrder";
import RegisterUser from "../pages/Register/RegisterUser";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import PublicRoutes from "./PublicRoutes/PublicRoutes";
import "./Layout.css";
import { AppContext } from "../context/AppContext";
import { useState, useEffect } from "react";

const Layout = () => {
  const [user, setUser] = useState();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let userCurrent = localStorage.getItem("user_instaya");

    if (userCurrent) {
      userCurrent = JSON.parse(userCurrent);
      setUser(userCurrent);
    }

    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <AppContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route element={<PublicRoutes />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterUser />} />
              </Route>
              <Route
                element={
                  <PrivateRoutes
                    isAllowed={user ? true : false}
                    redirectTo={"/login"}
                  />
                }
              >
                <Route path="/order/list" element={<ListOrder />} />
                <Route path="/order/create" element={<CreateOrder />} />
                <Route path="/order/edit" element={<EditOrder />} />
              </Route>

              <Route path="*" element={<Navigate to={"/"} replace />} />
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
      )}
    </>
  );
};

export default Layout;
