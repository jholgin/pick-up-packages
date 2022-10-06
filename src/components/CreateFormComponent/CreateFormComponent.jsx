import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../context/AppContext";

const CreateForm = () => {
  const { user } = useContext(AppContext);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    direccion_recogida: "",
    fecha: "",
    hora: "",
    ancho: "",
    largo: "",
    alto: "",
    peso: "",
    ciudad_recogida: "",
    nombre_destinatario: "",
    cedula: "",
    direccion_entrega: "",
    ciudad_entrega: "",
  });

  const handleChange = (event) => {
    console.log(
      "handleChange -> " + event.target.name + " : " + event.target.value
    );
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const orderSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_HOST}/orders/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: user?.id,
            fecha: values.fecha + "T" + values.hora + ":00.00Z",
            largo: values.largo,
            ancho: values.ancho,
            alto: values.alto,
            peso: values.peso,
            direccion_recogida: values.direccion_recogida,
            ciudad_recogida: values.ciudad_recogida,
            nombre_destinatario: values.nombre_destinatario,
            cedula: values.cedula,
            direccion_entrega: values.direccion_entrega,
            ciudad_entrega: values.ciudad_entrega,
          }),
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      navigate("/order/list");
      
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Row} md="4" controlId="validationCustom1">
              <Form.Label>Fecha</Form.Label>
              <Row>
                <Form.Control
                  type="date"
                  name="fecha"
                  value={values.fecha}
                  onChange={handleChange}
                />
              </Row>

              <Form.Label>Hora</Form.Label>
              <Row>
                <Form.Control
                  type="time"
                  name="hora"
                  value={values.hora}
                  onChange={handleChange}
                />
              </Row>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Row} md="8" controlId="validationCustom1">
              <Col sm="1">
                <Form.Label>Ancho</Form.Label>
              </Col>
              <Col sm="2">
                <Form.Control
                  type="number"
                  placeholder="Centimetros"
                  name="ancho"
                  value={values.ancho}
                  onChange={handleChange}
                />
              </Col>
              <Col sm="1">
                <Form.Label>Largo</Form.Label>
              </Col>
              <Col sm="2">
                <Form.Control
                  type="number"
                  placeholder="Centimetros"
                  name="largo"
                  value={values.largo}
                  onChange={handleChange}
                />
              </Col>

              <Col sm="1">
                <Form.Label>Alto</Form.Label>
              </Col>

              <Col sm="2">
                <Form.Control
                  type="number"
                  placeholder="Centimetros"
                  name="alto"
                  value={values.alto}
                  onChange={handleChange}
                />
              </Col>
              <Col sm="1">
                <Form.Label>Peso</Form.Label>
              </Col>

              <Col sm="2">
                <Form.Control
                  type="number"
                  placeholder="Kilogramos"
                  name="peso"
                  value={values.peso}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
          </Row>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Direccion de recogida
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="direccion_recogida"
                value={values.direccion_recogida}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Ciudad de recogida
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="ciudad_recogida"
                value={values.ciudad_recogida}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Nombre destinatario
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="nombre_destinatario"
                value={values.nombre_destinatario}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Cédula/Nit destinatario
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="cedula"
                value={values.cedula}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Direccion de entrega
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="direccion_entrega"
                value={values.direccion_entrega}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Ciudad de entrega
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name="ciudad_entrega"
                value={values.ciudad_entrega}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Row>
            <Col sm={8}></Col>
            <Col sm={4}>
              <Button
                type="submit"
                as={Col}
                sm="12"
                onClick={orderSubmitHandler}
              >
                Solicitar servicio
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default CreateForm;
