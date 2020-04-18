import React from 'react';
import {Card,Button } from 'react-bootstrap';

const AircraftCard = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.imageURL} />
            <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle><strong>{props.type}</strong></Card.Subtitle>
            <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button href={`/aircraft/details/${props.id}`} variant="primary">Learn more</Button>
            </Card.Footer>
        </Card>
    );
}

export default AircraftCard;