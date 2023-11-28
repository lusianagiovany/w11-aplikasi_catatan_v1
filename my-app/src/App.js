import './App.css';
import AddTodo from './pages/AddTodo';
import HomePage from './pages/HomePage';
// import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  // const [todos, setTodos] = useState([]);

  // const addTodo = (newTodo) => {
  //   setTodos([...todos, newTodo]);
  // };
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AddTodo" element={<AddTodo  />} />   
    </Routes>
    </BrowserRouter> 
  );
}


export default App;

