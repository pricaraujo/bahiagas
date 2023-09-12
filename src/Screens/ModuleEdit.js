import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" style={{width:'', margin: 'auto', display : 'inline-block', display: 'flex', justifyContent: 'center',
      alignItems: 'center', marginTop: '30px'}} onClick={handleShow}>
        Editar
      </Button>
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar simulação</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
      <Form.Control size="sm" type="number" placeholder="cid" />
      <Form.Control size="sm" type="number" placeholder="CO2" />
      <Form.Control size="sm" type="number" placeholder="CO2" />
      </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">Fechar</Button>
          <Button onClick={handleClose} variant="primary">Salvar</Button>
        </Modal.Footer>
      </Modal>
      </Modal.Dialog>
    </div>
    </>
  );
}

export default Edit;