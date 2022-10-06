import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthServices } from "../../services/Auth";
import { AppContext } from "../../context/AppContext";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "./FormLogin.css";

// Servicios
const authServices = new AuthServices();

const FormLogin = () => {
  // Contexto
  const { setUser } = useContext(AppContext);

  // Estados propios del componente
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    color: "",
  });

  const [form, setForm] = useState({
    correo: "",
    contrasena: "",
  });

  const navigate = useNavigate();

  const handleOnChangeForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const storeUserPersiste = (user) => {
    console.log("Guardado");
    localStorage.setItem("user_instaya", JSON.stringify(user));
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const user = await authServices.auth(form);

      console.log(user, "usuario");
      if (user) {
        setUser(user?.user);
        storeUserPersiste(user?.user);
      }

      setNotification({
        show: true,
        message: "Logueado!",
        color: "success",
      });

      setTimeout(() => {
        navigate("/order/list");
      }, 3000);
    } catch (error) {
      setNotification({
        show: true,
        message: "Hubo un error al registrar el usuario",
        color: "warning",
      });
    }
  };

  return (
    <>
      {/* ------ Notificaciones ------ */}
      <ToastContainer position="top-end">
        <Toast
          autohide
          bg={notification.color}
          delay={3000}
          show={notification.show}
          onClose={() => setNotification({ show: false, message: "" })}
        >
          <Toast.Header>
            {notification.color === "success"
              ? "Operacion exitosa"
              : "Operacion fallida"}
          </Toast.Header>
          <Toast.Body>{notification.message}</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* ------ Formulario ------ */}
      <div className="content-form-login">
        <Form className="form-login" onSubmit={handleOnSubmit}>
          <FaUserCircle className="user-circle" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              value={form.correo}
              placeholder="Ingresa tu correo electrónico"
              onChange={(e) => handleOnChangeForm("correo", e.target.value)}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => handleOnChangeForm("contrasena", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRegister">
            <a href="/register">Registar</a>
          </Form.Group>        
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormLogin;
