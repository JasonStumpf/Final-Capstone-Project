import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchingPasswords, setMatchingPasswords] = useState(true)
  const [takenUsername, setTakenUsername] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    let vals = {};
    vals['username'] = e.target[0].value;
    vals['password'] = e.target[1].value;
    vals['confirm'] = e.target[2].value;

    axios.post('http://127.0.0.1:5000/signup', JSON.stringify(vals), {
      headers: { 'Content-Type': 'application/json' }
    }
    )
      .then(function (response) {
        if (response.data['message'] === 'Username already exists') {
          setTakenUsername(true);
        } else if (response.data['message'] === 'Passwords do not match') {
          setMatchingPasswords(false);     
        } else {
          setTakenUsername(false);
          alert("Account successfully created!");
          navigate("/login");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Welcome New Player!</h1>
      <h1>Sign Up</h1>
      <Form method="POST" className="col m-auto mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
          {takenUsername && <Form.Text className="text-danger">Username already taken.</Form.Text>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {!matchingPasswords && <Form.Text className="text-danger">Passwords do not match.</Form.Text>}
        </Form.Group>
        <Button variant="success" type="submit">
          Sign Up
        </Button>
        <br />
        Already have an account:
        <Link to="/login">
          LOG IN
        </Link>
      </Form>
    </div>
  );
};

export default SignUp;