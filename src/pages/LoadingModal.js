import { Modal } from "react-bootstrap";
import "./LoadingModal.css";

const LoadingModal = () => {
  return (
    <Modal
      show={true}
      className="modal-sm d-flex align-items-center bgModal"
    ></Modal>
  );
};

export default LoadingModal;
