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
    const [score, setScore] = useState(0);

    const handleInputChange = (event) => {
        setUserAnswer(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!userAnswer) {
            setShowFeedback(true);
            setIsAnswerCorrect(false);
            return;
        }

        const correctAnswer = props.q.answer;
        const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
        setIsAnswerCorrect(isCorrect);
        setShowFeedback(true);

        if (isCorrect) {
            setScore((score) => score + props.q.value)
        }
        else {
            setScore((score) => score - props.q.value)
        }
        let copyA = [...props.a]
        copyA.push(props.q.id)
        props.s(copyA)
    }

    return (
        <>
            <Card className="input-card" style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>For ${props.q.value}</ListGroup.Item>
                    <ListGroup.Item>{props.q.question}</ListGroup.Item>
                    {props.a.includes(props.q.id) && isAnswerCorrect && showFeedback === true ? <p className="text-success">Yes, the correct answer was {props.q.answer.toUpperCase()}.</p>
                        :
                        props.a.includes(props.q.id) && !isAnswerCorrect && showFeedback === true ? <p className="text-danger">Sorry, the correct answer was {props.q.answer.toUpperCase()}.</p>
                            :
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control size="lg" type="text" placeholder="What is" value={userAnswer} onChange={handleInputChange} />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="success" type="submit">Submit</Button>
                            </Form>          
                    }
                    <p>Score: $ {score}</p>
                    <Button variant="secondary">Save Current Score</Button>
                </ListGroup>
            </Card>
        </>
    )
}

export default Question;