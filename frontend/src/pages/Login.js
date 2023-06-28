// Imports
import Google from "../img/google.png";
import '../css/login.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

// Dependencies
const backendURL = require('../config/backendURL');



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, error, isLoading } = useLogin()

  const googleLogin = () => {
    window.open(`${backendURL}/auth/google`, '_self')
  }
  const normalLogin = async (e) => {
    e.preventDefault();
    await login( email, password )

  }
  
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="top-section">
            <h1 className="login-title">Choose a Login Method</h1>
        </div>
        <div className="bottom-section">
            <div className="left">
            <div className="login-button" onClick={ googleLogin }>
                <img src={Google} alt="" className="icon" />
                Google
            </div>
            </div>
            <div className="center">
            <div className="line" />
            <div className="or">OR</div>
            </div>
            <div className="right">
                <input 
                className="input-box"
                type="email" 
                placeholder="Email"
                onChange = {(e) => setEmail(e.target.value)}
                value = {email} 
                />
                <input 
                className="input-box"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <button className="login-submit" onClick={ normalLogin }>Login</button>

                <p className="need-an-account-text">Need an Account?</p>
                <Link to='/register'><p className="link-to-create-account-text">Create One</p>Create One</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;