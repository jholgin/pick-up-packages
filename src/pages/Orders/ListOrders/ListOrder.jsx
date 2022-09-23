import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./ListOrder.css";
const ListOrder = () => {
  return (<>
      {/* <Button id="boton">Hola</Button> */}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pick Up Packages</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Órdenes</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Breadcrumb>
        <Breadcrumb.Item id="link_crear" href="#">Crear Orden</Breadcrumb.Item>
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
              <td>1</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>2</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>3</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>4</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>5</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>6</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>placeholder</td>
            </tr>
          </tbody>
        </table>
      </div>
  </>);
};

export default ListOrder;
