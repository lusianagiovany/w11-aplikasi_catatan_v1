import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';


function TodosFromFunction({ todo, onDelete }) {
    const [createdAt, setCreatedAt] = useState("");
  
    useEffect(() => {
      setCreatedAt(todo.createdAt.toLocaleString());
    }, [todo.createdAt]);
    
    return (
      <Card>
        <Card.Header as="h5">{createdAt}</Card.Header>
        <Card.Body>
          <Card.Title>{todo.title}</Card.Title>
          <Card.Text>{todo.todo}</Card.Text>
          <Button variant="primary" onClick={() => onDelete(todo)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }

export default TodosFromFunction;