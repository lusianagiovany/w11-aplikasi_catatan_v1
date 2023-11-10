import logo from './logo.svg';
import React from 'react';
import './App.css';

function TodosFromFunction(props) {
  return (
    <div className="grid-item">
      <h3>{props.status}</h3>
      <p>{props.createdAt}</p>
      <p>{props.todo}</p>
    </div>
  );
}

function App() {
  const name = "VAN";
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedUpdatedDate = `(${year}-${month}-${day})`;

  return (
    <div className="App">
      <h1>{name}'s To-do List</h1>
      <div className="grid-container">
        <TodosFromFunction createdAt={formattedUpdatedDate} status="CREATED" todo="Tugas Fisika dan Biologi" />
        <TodosFromFunction createdAt={formattedUpdatedDate} status="IN-PROGRESS" todo="Tugas Matematika" />
        <TodosFromFunction createdAt={formattedUpdatedDate} status="DONE" todo="Mengerjakan tugas Bahasa Inggris" />
      </div>
    </div>
  );
}

export default App;

