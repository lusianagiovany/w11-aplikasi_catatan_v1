import './App.css';
import AddNote from './pages/AddNote';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom'
import { getAccessToken } from './utils/network';


function NeedLogin() {
  let auth = getAccessToken();
  if (!auth) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route element={<NeedLogin />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/AddNote" element={<AddNote  />} />   
    </Routes>
    </BrowserRouter> 
  );
}


export default App;

