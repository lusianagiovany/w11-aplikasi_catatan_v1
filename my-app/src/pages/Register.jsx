import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../utils/network';
import { Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();
    
    register({ username, password }).then((response) => {
    console.log(response);
        if (!response.error) {
            alert("Account created successfully! You can now log in.");
            navigate("/");
        } else {
            alert("Failed to create an account. Please try again.");
        }
    });
}
    
  return (
    <div className="form-login">
        <Form.Label as="h4" className="custom-login">
            Welcome to MyNotes!
        </Form.Label>
            <Form onSubmit={onSubmitHandler} className="w-50">
                <Form.Group controlId="formBasicUsername" className="form-username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="form-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasic" className="label-register">
                    <Form.Label>You have an account? <Link to="/">Login</Link></Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit" className="button-login" onClick={onSubmitHandler}> 
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default Register;
