import './css/App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Pages and Componenets
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <Navbar />

      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route 
              path="/register" 
              element = {<Register/>} 
            />
            <Route 
              path="/login" 
              element = {<Login/>} 
            />
            <Route 
              path="/home" 
              element = {<Home/>} 
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
