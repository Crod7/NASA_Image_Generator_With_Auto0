import Google from "../img/google.png";
import '../css/login.css'
import { Link } from "react-router-dom";


const Login = () => {

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="top-section">
            <h1 className="login-title">Choose a Login Method</h1>
        </div>
        <div className="bottom-section">
            <div className="left">
            <div className="login-button">
                <img src={Google} alt="" className="icon" />
                Google
            </div>
            </div>
            <div className="center">
            <div className="line" />
            <div className="or">OR</div>
            </div>
            <div className="right">
                <input type="text" required="true" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="login-submit">Login</button>

                <p className="need-an-account-text">Need an Account?</p>
                <Link to='/register'><p className="link-to-create-account-text">Create One</p>Create One</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;