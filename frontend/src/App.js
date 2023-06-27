// Imports
import './css/App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
// Pages and Componenets
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
// Dependencies
const backendURL = require('./config/backendURL');



function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const getUser = () => {
      fetch(`${backendURL}/auth/login/success`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      }).then((response) => {
        if (response.status === 200) return response.json();
        throw new Error('Authentication has failed! At App.js > const getUser > .then((response)')
      }).then(resObject => {
        setUser(resObject.user);
      }).catch(err => {
        console.log(err)
      })
    }
    getUser();
  }, []);

  console.log(user)
  
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar user={user}/>

          <Routes>
            <Route 
              path="/register" 
              element = {user ? <Navigate to="/" /> : <Register/>} 
            />
            <Route 
              path="/login" 
              element = {user ? <Navigate to="/" /> : <Login/>} 
            />
            <Route 
              path="/" 
              element = {!user ? <Navigate to="/login" /> : <Home/>} 
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
