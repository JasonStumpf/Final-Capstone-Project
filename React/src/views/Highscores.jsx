import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const Highscores = () => {

    const [highscores, setHighscores] = useState([]);

    const getHighscoreData = async () => {
        let response = await axios.get('http://127.0.0.1:5000/highscores');
        return response.status === 200 ? response.data : null
    }

    const loadHighscoreData = async () => {
        let data = await getHighscoreData()
        setHighscores(data)
    }

    useEffect(() => {
        loadHighscoreData();
    }, []);

    return (
        <>
        <br />
            <h1>Check Out The High Scores!</h1>
            <br />
            <div className="highscores-container">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Contestants</th>
                            <th>Scores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {highscores.map((score, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{score.username}</td>
                                <td>{score.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Highscores;