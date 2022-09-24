import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pick Up Packages</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Login</Nav.Link>
            <Nav.Link href="/order/list">Órdenes</Nav.Link>
            <Nav.Link href="/order/create">Crear orden</Nav.Link>
            <Nav.Link href="/order/edit">Edit orden</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
