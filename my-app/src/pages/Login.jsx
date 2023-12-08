import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../utils/network';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    login({username, password}).then((response) => {
        if (response) {
            navigate("/home");
        } else {
            alert("Failed to log in. Please try again.");
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
                        type="username"
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
            <Form.Label>Don't have an account? <Link to="/register">Register</Link></Form.Label>
        </Form.Group>
            <Button variant="primary" type="submit" className="button-login"> 
                Log In
            </Button>
        </Form>
    </div>
  );
}

export default Login;
