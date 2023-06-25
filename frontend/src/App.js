import './css/App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Pages and Componenets
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  
  const user = false; // To later be used to check for active users
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
