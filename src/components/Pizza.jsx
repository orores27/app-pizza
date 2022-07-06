import { Card, Row, Button, Col } from 'react-bootstrap';
import React, {useState} from "react";

// props = propriétés
const Pizza = (props) => {
    const[taille, setTaille] = useState('small');
    const[quantite, setQuantite] = useState(1);
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
                        <Button variant='primary'>Choisir cette pizza</Button>
                    </Card.Body>
                </Card>
                </>
    )
};

export default Pizza;