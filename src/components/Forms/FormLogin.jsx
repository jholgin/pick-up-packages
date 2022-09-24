import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaUserCircle } from "react-icons/fa";
import "./FormLogin.css";

const FormLogin = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="content-form-login">
      <Form className="form-login" onSubmit={handleOnSubmit}>
        <FaUserCircle className="user-circle" />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRegister">
            <a href="/register">Register</a>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRecover">            
            <a href="/register">Recover password</a>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormLogin;
