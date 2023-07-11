import './css/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
const backendURL = require('./config/backendURL');

function App() {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${backendURL}/auth/login/success`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        });

        if (response.status === 200) {
          const resObject = await response.json();
          console.log(resObject);
          setUser(resObject);
        } else {
          throw new Error('Authentication has failed!');
        }
      } catch (error) {
        console.log(error);
      }
    };
    // Check if authContext.authUser exists and user is null
    if (authContext.authUser && !user) {
      setUser(authContext.authUser);
    }
    getUser();
  }, [authContext.authUser]);

  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar user={user} />

          <Routes>
            <Route path="/register" element={user ? <Home user={user} /> : <Register />} />
            <Route path="/login" element={user ? <Home user={user} /> : <Login />} />
            <Route path="/" element={!user ? <Navigate to="/login" /> : <Home user={user}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
