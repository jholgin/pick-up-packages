import Card from "react-bootstrap/Card";
import CreateForm from "../../../components/CreateFormComponent/CreateFormComponent";
import NavigationBar from "../../../components/NavBarComponent/NavBarComponent";
import "./CreateOrder.css";

const CreateOrder = () => {
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <br />
      <div className="carta-contendedora">
        <Card>
          <Card.Body>
            <Card.Title>Ingrese datos de recogida y entrega</Card.Title>
            <Card.Text>
              <CreateForm />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CreateOrder;
