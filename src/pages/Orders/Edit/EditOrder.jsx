import Card from "react-bootstrap/Card";
import NavigationBar from "../../../components/NavBarComponent/NavBarComponent";
import EditForm from "../../../components/EditFormComponent/EditFormComponet";
import { useParams } from "react-router-dom";
const EditOrder = () => {
  
  
  
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
              <EditForm orderId={useParams().orderId}/>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      
    </>
  );
};

export default EditOrder;
