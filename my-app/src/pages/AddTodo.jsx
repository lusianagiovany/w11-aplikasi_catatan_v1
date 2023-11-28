import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { addTodo } from '../utils/local';

function AddTodo() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo({
      createdAt: new Date(),
      title: todo.title,
      todo: todo.description,
    });
    navigate("/");
  };
  
  return (
    <Form onSubmit={(event) => onSubmitHandler(event)} className='card-container-addtodo'>
      <Form.Group controlId="exampleForm.ControlInput1" className="title-description-group">
        <Form.Label as="h4" className="custom-label-add">
          Add To-Do List
        </Form.Label>
        <Form.Label as="h5">Title</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Title"
          onChange={(event) => setTodo({ ...todo, title: event.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label as="h5">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Write description here..."
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </Form.Group>
      <Button variant="primary" type="button" className="button-add" onClick={onSubmitHandler}>
        Add Todo
      </Button>
    </Form>
  );
}

export default AddTodo;
