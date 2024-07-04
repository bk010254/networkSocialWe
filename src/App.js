import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './components/Styles/Style.css'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import RegisterPage from './components/Register/RegisterPage';

import HomePage from './components/Home/HomePage';
import Messages from './components/Messages/Messages';
import Login from './components/LoginForm/Login';
import Notification from './components/Notification/Notification';
import Password from './components/UpdatePassword/Password';
import Nav from './components/Navbar/Nav';





function App() {
  return (
   
    <BrowserRouter>
    {/* <Nav /> */}
    <Navbar /> 
    
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
       
        <Route path="/messages" element={<Messages />} />
        <Route path="/notification" element={<Notification />} />
        {/* <Route path="/registerPage" element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
