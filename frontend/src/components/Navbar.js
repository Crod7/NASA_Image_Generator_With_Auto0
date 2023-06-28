// Imports
import emptyProfilePic from '../img/empty.png';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { useAuthContext } from '../hooks/useAuthContext';
// Dependencies
const backendURL = require('../config/backendURL');



const Navbar = ({user}) => {
    const { dispatch } = useAuthContext()
    const logout = async () => {
        // User removed from local storage
        await localStorage.removeItem('user')
        // Auth Context
        await dispatch({type: 'LOGOUT'});
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
                                src= { user.profilePicture !== null ? user.profilePicture : emptyProfilePic}
                                alt= ''
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