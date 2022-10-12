import moment from "moment";
import { useState,useContext ,useEffect} from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../../components/NavBarComponent/NavBarComponent";
import { OrderServices } from "../../../services/Order";
import { AppContext } from "../../../context/AppContext";
import "./ListOrder.css";

// Servicios
const orderServices = new OrderServices();

const ListOrder = () => {
  const { user } = useContext(AppContext);
  console.log(user.id)
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const info = await orderServices.getOrdersByUserId(user?.id);

    setOrders(info?.orders);
  };

  return (
    <>
      <NavigationBar />
      <h3 id="title">Gestión de Paquetes - Listado de Órdenes</h3>
      <Breadcrumb id="link_crear">
        <Breadcrumb.Item href="#" onClick={() => navigate("/order/create")}>
          Crear Orden
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col"># Servicio</th>
              <th scope="col">Fecha</th>
              <th scope="col">Estado</th>
              <th scope="col">Ciudad Entrega</th>
              <th scope="col">Dirección Entrega</th>
              <th scope="col">Nombre destinatario</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={`order-${index}`}>
                <td>
                  <Breadcrumb>
                    <Breadcrumb.Item className="link_servicio" onClick = {() => navigate(`/order/edit/${order.id}`)}>
                      {index}
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </td>
                <td>{moment(order?.fecha).format("YYYY-MM-DD")}</td>
                <td>{order?.estado}</td>
                <td>{order?.ciudad_entrega}</td>
                <td>{order?.direccion_entrega}</td>
                <td>{order?.nombre_destinatario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListOrder;
