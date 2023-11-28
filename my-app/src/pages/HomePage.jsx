import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import TodosFromFunction from '../components/TodosFromFunction';
import { getTodos, handleDeleteTodo } from '../utils/local';




function HomePage() {
  const name = "VAN";
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedUpdatedDate = `(${year}-${month}-${day})`;
  
  const navigate = useNavigate();
  const [searchTodo, setSearchTodo] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([])
  const [ todos, setTodos ] = useState([])
  
  useEffect(() => {
    const data = getTodos();
    setTodos(data);
  }, []);


  
  const addTodo = () => {
    navigate('/AddTodo');
  }
 
  useEffect(() => {
    setFilteredTodos(
      todos.filter(todo =>
        todo.todo.toLowerCase().includes(searchTodo.toLowerCase()) ||
        todo.title.toLowerCase().includes(searchTodo.toLowerCase())
    ) 
  );
  }, [searchTodo, todos]);

  const onDeleteHandler = (deleteTodo) => {
    handleDeleteTodo(deleteTodo);
    setTodos(getTodos());
  };
  
  return (
    <div className="App">
       <h1>{name}'s To-do List</h1>
       <div className="custom-form-container">
         <Form>
           <Form.Group className="mb-4 custom-form-group" controlId="formSearchFilter">
             <Form.Label as="h3" className="custom-label">
               Search Todo List
             </Form.Label>
             <Form.Control
               size="lg"
               type="search"
               placeholder="Search..."
               onChange={(e) => setSearchTodo(e.target.value)}
             />
           </Form.Group>
           <Button variant="primary" type="submit" className="custom-button" onClick={addTodo}>
             Add Todo
           </Button>
         </Form>
       </div>
       <div className="card-container">
         {filteredTodos.map((todo, index) => (
           <TodosFromFunction key={index}  
           createdAt={formattedUpdatedDate} 
           title={todo.title} 
           todo={todo} 
           onDelete={onDeleteHandler} />
         ))}
       </div>
     </div>
   );
 }

 export default HomePage;
