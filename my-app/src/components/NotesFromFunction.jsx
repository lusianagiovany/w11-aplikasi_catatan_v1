import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';


function NotesFromFunction({ note, onDelete }) {
    const [createdAt, setCreatedAt] = useState("");
  
    useEffect(() => {
      setCreatedAt(note.createdAt.toLocaleString());
    }, [note.createdAt]);
    
    return (
      <Card>
        <Card.Header as="h5">{createdAt}</Card.Header>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.note}</Card.Text>
          <Button variant="primary" onClick={() => onDelete(note)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }

export default NotesFromFunction;