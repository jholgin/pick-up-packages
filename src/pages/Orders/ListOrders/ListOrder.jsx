import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavigationBar from "../../../components/NavBarComponent/NavBarComponent";
import "./ListOrder.css";

const ListOrder = () => {
  return (
    <>
      <NavigationBar />
      <h3 id="title">Gestión de Paquetes - Listado de Órdenes</h3>
      <Breadcrumb id="link_crear">
        <Breadcrumb.Item href="#">Crear Orden</Breadcrumb.Item>
      </Breadcrumb>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col"># Servicio</th>
              <th scope="col">Fecha</th>
              <th scope="col">Ciudad Entrega</th>
              <th scope="col">Dirección Entrega</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Breadcrumb>
                  <Breadcrumb.Item className="link_servicio" href="#">
                    1
                  </Breadcrumb.Item>
                </Breadcrumb>
              </td>
              <td>01/21/2021</td>
              <td>Santa Marta</td>
              <td>Calle 1 # 2 - 3</td>
              <td>Guardado</td>
            </tr>
            <tr>
              <td>
                <Breadcrumb>
                  <Breadcrumb.Item className="link_servicio" href="#">
                    2
                  </Breadcrumb.Item>
                </Breadcrumb>
              </td>
              <td>01/21/2021</td>
              <td>Barranquilla</td>
              <td>Calle 4 # 5 - 6</td>
              <td>Cancelado</td>
            </tr>
            <tr>
              <td>
                <Breadcrumb>
                  <Breadcrumb.Item className="link_servicio" href="#">
                    3
                  </Breadcrumb.Item>
                </Breadcrumb>
              </td>
              <td>01/21/2021</td>
              <td>Cartagena</td>
              <td>Calle 7 # 8 - 9</td>
              <td>Cumplido</td>
            </tr>
            <tr>
              <td>
                <Breadcrumb>
                  <Breadcrumb.Item className="link_servicio" href="#">
                    4
                  </Breadcrumb.Item>
                </Breadcrumb>
              </td>
              <td>01/21/2021</td>
              <td>Medellín</td>
              <td>Calle 10 # 11 - 12</td>
              <td>Cancelado</td>
            </tr>
            <tr>
              <td>
                <Breadcrumb>
                  <Breadcrumb.Item className="link_servicio" href="#">
                    5
                  </Breadcrumb.Item>
                </Breadcrumb>
              </td>
              <td>01/21/2021</td>
              <td>Bogotá</td>
              <td>Calle 13 # 14 - 16</td>
              <td>Cumplido</td>
            </tr>
            <tr>
              <td>
                <Breadcrumb>
                  <Breadcrumb.Item className="link_servicio" href="#">
                    6
                  </Breadcrumb.Item>
                </Breadcrumb>
              </td>
              <td>01/21/2021</td>
              <td>Cali</td>
              <td>Calle 17 # 18 - 19</td>
              <td>Cumplido</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListOrder;
