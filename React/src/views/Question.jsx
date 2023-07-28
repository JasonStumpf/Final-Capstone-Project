import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from "react";
import '../static.css';

const Question = (props) => {
    console.log(props)

    return (
        <>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{props.q.question}</ListGroup.Item>
                        <ListGroup.Item>What is: {props.q.answer}</ListGroup.Item>
                    </ListGroup>
                </Card>
        </>
    )
}
export default Question;