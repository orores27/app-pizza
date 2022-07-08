import { Card, Row, Button, Col, Modal } from 'react-bootstrap';
import React, {useState} from "react";

// props = propriétés
const Pizza = (props) => {
    const[taille, setTaille] = useState('small');
    const[quantite, setQuantite] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = ()=> setShow(false);
    const handleShow = ()=> setShow(true);

    const [modalShow, setModalShow] = React.useState(false);
        return (
                <>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={props.lapizza.image} />
                    <Card.Body>
                        <Card.Title>{props.lapizza.name}</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col md={6}>
                                    <h6>Taille:
                                        <select
                                            value={taille}
                                            onChange={(e) => setTaille(e.target.value)}
                                        >
                                            {props.lapizza.varients.map(taille => (
                                                <option value={taille}>{taille}</option>
                                            ))}
                                        </select>
                                    </h6>
                                </Col>
                                <Col md={6}>
                                    <h6>Quantité :<br/>
                                    <select 
                                        value={quantite}
                                        onChange={(e) => setQuantite(e.target.value)}
                                    >
                                        {[...Array(10).keys()].map((v,i) =>(
                                            <option value={i+1}>{i+1}</option>
                                        ))}
                                    </select>
                                    </h6>
                                </Col>
                            </Row>
                        </Card.Text>
                        <Row>
                            <Col md={3}>
                                Prix : {props.lapizza.prices[0][taille] * quantite} €
                            </Col>
                            <Col md={4}>
                                <Button className = "bg-warning text-light">Ajouter</Button>
                            </Col> 
                            <Col md={5}>
                            <Button variant="primary" onClick={handleShow}>
                                    Description</Button>
                                </Col>                        
                        </Row>
                    </Card.Body>
                </Card>
                {/* <Button variant='primary'>Choisir cette pizza</Button> */}
                {/* Modal */}
                <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Farmhouse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card.Title>{props.lapizza.name}</Card.Title>
        <Card.Img variant="top" src={props.lapizza.image} />
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
            <h3>Description</h3>
        <Card.Text>
            {props.lapizza.description}</Card.Text>
        </Modal.Footer>
      </Modal>
      
    </>
  );
}

     
export default Pizza;