import { useState } from "react";
import { Button, Modal, Spinner} from "react-bootstrap";
import CardGroup2 from "./components/CardGroup2/CardGroup2";
import Modals from "./components/Modals/Modals";



function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <h1>Using React Bootstrap</h1>
      <Button variant="secondary">Primary</Button>
      <Spinner animation="border" role="status">
     <span className="visually-hidden">Loading...</span>
    </Spinner>
    <CardGroup2></CardGroup2>
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    <Modals></Modals>
    </div>
  );
}

export default App;
