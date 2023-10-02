import { Modal } from "react-bootstrap";
import "./ContactModal.css";

const ContactModal = (props) => {
  return (
    <Modal show={true} className="d-flex align-items-center contactModal">
      <Modal.Body>
        <p>{props.contactModalMessage}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
