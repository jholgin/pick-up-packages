import Card from "react-bootstrap/Card";
import "./CreateOrder.css";

const CreateOrder = () => {
  return (
    <>
      <br />
      <div className="carta-contendedora">
        <Card>
          <Card.Body>
            <Card.Title>Ingrese datos de recogida y entrega</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CreateOrder;
