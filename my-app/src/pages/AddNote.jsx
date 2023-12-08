import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddNote() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNote({
      createdAt: new Date(),
      title: notes.title,
      note: notes.description,
    });
    navigate("/home");
  };
  
  return (
    <Form onSubmit={(event) => onSubmitHandler(event)} className='card-container-addtodo'>
      <Form.Group controlId="exampleForm.ControlInput1" className="title-description-group">
        <Form.Label as="h4" className="custom-label-add">
          Add New Notes
        </Form.Label>
        <Form.Label as="h5">Title</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Title"
          onChange={(event) => setNotes({ ...notes, title: event.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label as="h5">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Write description here..."
          value={notes.description}
          onChange={(e) => setNotes({ ...notes, description: e.target.value })}
        />
      </Form.Group>
      <Button variant="primary" type="button" className="button-add" onClick={onSubmitHandler}>
        Add Notes
      </Button>
    </Form>
  );
}

export default AddNote;
