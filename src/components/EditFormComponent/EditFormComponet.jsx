import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { OrderServices } from "../../services/Order";
import moment from "moment";

const orderServices = new OrderServices();

const EditForm = props => {
    
    const orderId = props.orderId;

    const navigate = useNavigate();

    const [values, setValues] = useState({
        direccion_recogida: "",
        estado: "",
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
    useEffect(() => {
        identifiedOrder();
    },[]);

    const identifiedOrder = async() => {
        const orderInfo = await orderServices.getOrderById(orderId);
        const result = orderInfo.order;
        setValues({
            direccion_recogida: result.direccion_recogida,
            estado: result.estado,
            fecha: moment(result.fecha).format('YYYY-MM-DD'),
            hora: moment(result.fecha).format('HH:mm'),
            ancho: result.ancho,
            largo: result.largo,
            alto: result.alto,
            peso: result.peso,
            ciudad_recogida: result.ciudad_recogida,
            nombre_destinatario: result.nombre_destinatario,
            cedula: result.cedula,
            direccion_entrega: result.direccion_entrega,
            ciudad_entrega: result.ciudad_entrega,
        })
    }

    


    const handleChange = (event) => {
        setValues((values) => ({
        ...values,
        [event.target.name]: event.target.value,
        }));
    };

    const orderSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const responseData  = await orderServices.editOrder(orderId,
              JSON.stringify({
                fecha: values.fecha + "T" + values.hora + ":00.00Z",
                estado:values.estado,
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
              })
            )
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
                Estado
                </Form.Label>
                <Col sm="10">
                <Form.Select
                    name="estado"
                    value={values.estado}
                    onChange={handleChange}
                >
                    <option value="Guardado">Guardado</option>
                    <option value="Cancelado">Cancelado</option>
                    <option value="Finalizado">Finalizado</option>
                </Form.Select>
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
                    Editar servicio
                </Button>
                </Col>
            </Row>
            </Form>
        </Container>
        </>
    );
};

export default EditForm;
