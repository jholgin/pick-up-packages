import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthServices } from "../../services/Auth";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useNavigate } from "react-router-dom";

const authServices = new AuthServices();

const RegisterUser = () => {
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    color: "",
  });
  const [form, setForm] = useState({
    nombres: "",
    correo: "",
    usuario: "",
    contrasena: "",
  });

  const navigate = useNavigate();

  const handleOnChangeForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      await authServices.registerUser(form);

      setNotification({
        show: true,
        message: "Se ha creado exitosamente",
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
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          background: "#282626",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 150,
            margin: -25,
            width: 700,
            padding: 30,
            background: "black",
            color: "white",
          }}
        >
          <h4>Registro</h4>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Ingrese su nombre:</Form.Label>
              <Form.Control
                type="text"
                value={form.nombres}
                placeholder="Nombre Completo"
                onChange={(e) => handleOnChangeForm("nombres", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ingrese su nombre de usuario:</Form.Label>
              <Form.Control
                type="text"
                value={form.usuario}
                placeholder="Usuario"
                onChange={(e) => handleOnChangeForm("usuario", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ingrese su correo:</Form.Label>
              <Form.Control
                type="email"
                value={form.correo}
                placeholder="Correo Electronico"
                onChange={(e) => handleOnChangeForm("correo", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ingrese su contraseña:</Form.Label>
              <Form.Control
                type="password"
                value={form.contrasena}
                placeholder="Contraseña"
                onChange={(e) =>
                  handleOnChangeForm("contrasena", e.target.value)
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
