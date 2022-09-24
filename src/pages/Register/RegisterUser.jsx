import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const RegisterUser = () => {
  return (
    <div style={{
      display: 'flex',
      width:'100%',
      height:'100%', 
      justifyContent:'center',
      background:'#282626'
    }}>
    <div style={{ position: 'absolute',
                  top: 150,
                  margin: -25,
                  width: 700, 
                  padding: 30, 
                  background:'black',
                  color:'white',
                  
                  }}>
    <h4>Registro</h4>
    <Form>
    <Form.Group>
      <Form.Label>Ingrese su nombre:</Form.Label>
      <Form.Control type="text" placeholder="Nombre Completo" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Ingrese su correo:</Form.Label>
      <Form.Control type="email" placeholder="Correo Electronico" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Ingrese su contraseña:</Form.Label>
      <Form.Control type="password" placeholder="Contraseña" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
    </div>
    </div>
  );
};

export default RegisterUser;
