import './App.css';
import AddTodo from './pages/AddTodo';
import HomePage from './pages/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
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

