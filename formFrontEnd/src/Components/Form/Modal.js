import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { addAddress } from "../../utils/apiRequests";
function AddAddressModal({
  onChange,
  setNewAddressAsSelected,
  newAddressType,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    setShow(false);
    const fetchData = async () => {
      const { address_type } = await addAddress(newAddressType);
      setNewAddressAsSelected(address_type);
    };

    fetchData();
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Address Type
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Address Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="type">
              <Form.Label>Address Type</Form.Label>
              <Form.Control
                onChange={onChange}
                type="text"
                placeholder="Home"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddAddressModal;
