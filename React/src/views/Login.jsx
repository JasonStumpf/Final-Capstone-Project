import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            'username': username,
            'password': password,
        };

        axios.post("http://127.0.0.1:5000/login", data)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log("Error:", error.response.data);
            });
    };

    return (
        <div className="container">
            <Form
                method="POST"
                className="col m-auto mt-5"
                onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username . . . "
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password . . . "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;