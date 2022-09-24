import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./FormLogin.css";

const FormLogin = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/order/list");
  };

  return (
    <div className="content-form-login">
      <Form className="form-login" onSubmit={handleOnSubmit}>
        <FaUserCircle className="user-circle" />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Nunca compartiremos su correo electrónico con nadie más.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRegister">
          <a href="/register">Registar</a>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRecover">
          <a href="/register">Recuperar contraseña</a>
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
};

export default FormLogin;
