import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ContactModal(props) {
  const [show, setShow] = useState(true);

  return (
    <Modal
      show={show}
      backdrop={"static"}
      className="d-flex align-items-center justify-content-center"
    >
      <Modal.Body
        className="text-center rounded"
        style={{
          backgroundColor: "#282c34",
          borderBottom: "0 none",
          color: "white",
        }}
      >
        <p>{props.contactModalMessage}</p>
        <Button
          variant="secondary"
          onClick={() => {
            setShow(false);
            window.location.reload();
          }}
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default ContactModal;
