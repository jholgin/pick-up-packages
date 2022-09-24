import Card from 'react-bootstrap/Card';
import NavigationBar from '../../../components/NavBarComponent/NavBarComponent';
import CreateForm from '../../../components/CreateFormComponent.jsx/CreateFormComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateOrder.css'

const CreateOrder = () => {
  // const d = new Date();
  // var datestring =d.getFullYear()+'-'+ d.getDate()  + "-" + (d.getMonth()+1);

  return( 
    <>
    <div>
      <NavigationBar />
    </div>
    <br/>
    <div className='carta-contendedora'>
    <Card >
      <Card.Body>
        <Card.Title>Ingrese datos de recogida y entrega</Card.Title>
        <Card.Text>
          <CreateForm/>
        </Card.Text>
      </Card.Body>
    </Card>
      
      
      
    </div>
    
    </>
    );
};

export default CreateOrder;
