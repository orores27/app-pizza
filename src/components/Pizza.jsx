import React from 'react';
import { Card, Row, Button } from 'react-bootstrap';

// props = propriétés
const Pizza = (props) => {

  return (
        <>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.lapizza.image} />
            <Card.Body>
                <Card.Title>{props.lapizza.name}</Card.Title>
                <Card.Text>
                    <Row>
                    </Row>
                </Card.Text>
                <Button variant='primary'>Choisir cette pizza</Button>
            </Card.Body>
        </Card>
        </>
    )
};

export default Pizza;