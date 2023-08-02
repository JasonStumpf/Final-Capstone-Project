import axios from "axios";
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../components/DataProvider";


const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [wrongUsername, setWrongUsername] = useState(false);
    const [wrongPassword, setWrongPassword] = useState(false);
    const {user, setUser} = useContext(DataContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            'username': username,
            'password': password,
        };

        axios.post("http://127.0.0.1:5000/login", data)
            .then(function (response) {
                if (response.data['message'] === 'Wrong Password') {
                    setWrongUsername(false);
                    setWrongPassword(true);
                } else if (response.data['message'] === 'Wrong Username'){
                    setWrongUsername(true);
                    setWrongPassword(false);
                } else {
                    console.log(response)
                    setUser(response.data.user)
                    setWrongUsername(false);
                    setWrongPassword(false);
                    alert("Successfully logged in!");
                    navigate("/");
                }      
            })
            
            .catch(function (error) {
                console.log("Error:", error.response.data);
            });
    };

    return (
        <div className="container">
            <h1>Welcome Returning Player!</h1>
            <h1>Log In</h1>
            <Form method="POST" className="col m-auto mt-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                    {wrongUsername && <Form.Text className="text-danger">Username not found.</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {wrongPassword && <Form.Text className="text-danger">Wrong Password.</Form.Text>}
                </Form.Group>
                <Button variant="success" type="submit">
                    Log in
                </Button>
                <br />
                Don't have an account yet:
                <Link to="/signup">
                    SIGN UP
                </Link>
            </Form>
        </div>
    );
};

export default Login;