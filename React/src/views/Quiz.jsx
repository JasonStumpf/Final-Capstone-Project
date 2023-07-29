import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import '../static.css';
import Question from "./Question";
import { Button } from "react-bootstrap";

const Quiz = () => {

    const getQuizData = async () => {
        let response = await axios.get('http://127.0.0.1:5000/quiz');
        return response.status === 200 ? response.data : null
    }

    const loadQuizData = async () => {
        let data = await getQuizData();
        console.log(data)
        setQuiz(data.question_list);
        setNames(data.category_list);
    }

    const [quiz, setQuiz] = useState(() => loadQuizData());
    const [names, setNames] = useState(() => loadQuizData());

    const [currentQuestion, setCurrentQuestion] = useState({});

    const setQuestion = (question) => {
        setCurrentQuestion(question)
    }

    const [matchingSections, setMatchingSections] = useState([]);

    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    useEffect(() => {
      const computeMatchingSections = () => {
        if (names.length > 0 && quiz.length > 0) {
          const matchingSections = names.map((section) => {
            return {
              categoryId: section.category_id,
              category_name: section.category_name,
              questions: quiz.filter((q) => q.category_id === section.category_id),
            };
          });
          setMatchingSections(matchingSections);
        }
      };
      computeMatchingSections();
    }, [names, quiz]);

      return (
        <div>
          <div className="container">
            {matchingSections && matchingSections.length > 0 ? (
              <div className="columns">
                {matchingSections.map((section) => (
                  <div key={section.categoryId} className="column">
                    <Table responsive className="quiz-table">
                      <thead>
                        <tr>
                          <th className="category-name">{section.category_name.toUpperCase()}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.questions.map((question, index) => (
                          <tr key={index}>
                            <Button key={index} variant="primary" onClick={() => setQuestion(question)}>$ {question.value}</Button>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                ))}
              </div>
            ) : (
              <Card>
                <Card.Header>Load</Card.Header>
              </Card>
            )}
          </div>
          <div className="container">
            {currentQuestion ? <Question q={currentQuestion} /> : null}
          </div>
        </div>
      );
}
export default Quiz;
