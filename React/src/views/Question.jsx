import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from "react";
import '../static.css';
import Form from 'react-bootstrap/Form';

const Question = (props) => {
    const [userAnswer, setUserAnswer] = useState("");
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleInputChange = (event) => {
        setUserAnswer(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const correctAnswer = props.q.answer;
        setIsAnswerCorrect(userAnswer.toLowerCase() === correctAnswer.toLowerCase());
        setShowFeedback(true);
    }

    return (
        <>
            <Card className="input-card" style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>${props.q.value}</ListGroup.Item>
                    <ListGroup.Item>{props.q.question}</ListGroup.Item>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                size="lg"
                                type="text"
                                placeholder="What is"
                                value={userAnswer}
                                onChange={handleInputChange}
                            />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {showFeedback && isAnswerCorrect && <p className="text-success">Yes, that answer is correct!</p>}
                    {showFeedback && !isAnswerCorrect  && <p className="text-danger">Sorry, the correct answer was {props.q.answer.toUpperCase()}</p>}
                </ListGroup>
            </Card>
        </>
    )
}

export default Question;