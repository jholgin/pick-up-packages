import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const CreateForm = () => {
    return (
        <>
        <Container>
            

        <Form>
                
                <Row className="mb-3">
                <Form.Group as={Row} md="4" controlId="validationCustom1">
                    <Form.Label>Fecha</Form.Label>
                    <Row>
                    <Form.Control type="date"/>
                    </Row>
                    
                    <Form.Label>Hora</Form.Label>
                    <Row>
                    <Form.Control type="time"  />
                    </Row>
                    
                </Form.Group>
                </Row>
        
                <Row className="mb-3">
                <Form.Group as={Row} md="8" controlId="validationCustom1">
                    <Col sm='1'>
                    <Form.Label >Ancho</Form.Label>
                    </Col>
                    <Col sm='2'>
                    <Form.Control type="number" placeholder="Centimetros" />
                    </Col>
                    <Col sm='1'>
                    <Form.Label >Largo</Form.Label>
                    </Col>
                    <Col sm = '2'>
                    <Form.Control type="number" placeholder="Centimetros" />
                    </Col>
        
                    <Col sm ='1'>
                    <Form.Label >Alto</Form.Label>
                    </Col>
        
                    <Col sm='2'>
                    <Form.Control type="number" placeholder="Centimetros" />
                    </Col>
                    <Col sm='1'>
                    <Form.Label >Peso</Form.Label>
                    </Col>
        
                    <Col sm='2'>
                    <Form.Control type="number" placeholder="Kilogramos" />
                    </Col>
                    
                </Form.Group>
                </Row>
        
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Direccion de recogida
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="number" />
                </Col>
                </Form.Group>
        
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">Ciudad de recogida</Form.Label>
                <Col sm="10">
                    <Form.Control type="number"/>
                </Col>
                </Form.Group>
        
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Nombre destinatario
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="number"  />
                </Col>
                </Form.Group>
        
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Cédula/Nit destinatario
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="number" />
                </Col>
                </Form.Group>
        
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Direccion de entrega
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="number" />
                </Col>
                </Form.Group>
        
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Ciudad de entrega 
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="number" />
                </Col>
                
                </Form.Group>
                <Row>
                <Col sm={8}></Col>
                <Col sm={4}><Button type="submit" as={Col} sm ='12'>Solicitar servicio</Button></Col>
                </Row>
        
        
            </Form>
        </Container>
        </>

    );

};


export default CreateForm