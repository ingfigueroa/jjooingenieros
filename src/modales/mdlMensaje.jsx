
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MdlMensaje = ({ show, handleClose, modalMessage, modalTitulo }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
        closeButton
        style={{ backgroundColor: "#3b5e43ff", color: "white" }}
      >
        <Modal.Title>{modalTitulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center", color: "Black" }}>
        {modalMessage}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MdlMensaje;
