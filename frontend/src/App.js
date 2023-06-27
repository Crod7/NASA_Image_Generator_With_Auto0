import './css/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
const backendURL = require('./config/backendURL');

function App() {
  const [googleUser, setGoogleUser] = useState(null);
  let { user } = useAuthContext(); // Access the user and setUser from the AuthContext

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
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('Authentication has failed!');
        })
        .then((resObject) => {
          // Update the user state with the received user object
          setGoogleUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
    if (!googleUser){
      user = googleUser
    }
  }, [setGoogleUser]); // Include setGoogleUser in the dependency array to avoid stale closures

  console.log(`This is on app file: ${user}`);

  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar user={user} />

          <Routes>
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/" element={!user ? <Navigate to="/login" /> : <Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
