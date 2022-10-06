import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AppContext } from "../../context/AppContext";
import "./NavBarComponent.css";

const NavigationBar = () => {
  const { user, setUser } = useContext(AppContext);

  const handleOnClick = () => {
    setUser(undefined);
    localStorage.removeItem("user_instaya");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pick Up Packages</Navbar.Brand>
          <Nav className="me-auto content-nav-item">
            <div className="subcontent-nav-item">
              <Nav.Link href="/order/list">Órdenes</Nav.Link>
              <Nav.Link href="/order/create">Crear orden</Nav.Link>
              <Nav.Link href="/order/edit">Edit orden</Nav.Link>
            </div>
            <Nav.Link
              href="/home"
              className="nav-item-end"
              onClick={handleOnClick}
            >
              {user && "Cerrar sesión"}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
