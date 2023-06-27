// Imports
import emptyProfilePic from '../img/empty.png';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
// Dependencies
const backendURL = require('../config/backendURL');



const Navbar = ({user}) => {

    const logout = () => {
        window.open(`${backendURL}/auth/logout`, '_self');
    }

    return (
        <div className="navbar">
            <span className="navbar-title">
                <Link to='/' className='navbar-title-link'>
                    NASA Daily Image Generator
                </Link>
            </span>
            {
                user ? (
                    <ul className="navbar-list">
                        <li className="navbar-list-item">
                            <img
                                src={ user.profilePicture ? user.profilePicture : {emptyProfilePic}}
                                alt=""
                                className="navbar-avatar"
                            />
                        </li>
                        <li className="navbar-list-item">
                            { user.name }
                        </li>
                        <li className="navbar-list-item" onClick={ logout }>
                            Logout
                        </li>
                    </ul>
                ) : (
                    <ul className='navbar-list'>
                        <li className='navbar-list-item'>
                            <Link to='/login' className='navbar-list-link'>Login</Link>
                        </li>
                        <li className='navbar-list-item'>
                            <Link to='/register' className='navbar-list-link'>Register</Link>
                        </li>
                    </ul>

                )
            }

        </div>
    )
}

export default Navbar;