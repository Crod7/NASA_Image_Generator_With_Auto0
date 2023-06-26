import { Link } from 'react-router-dom';
import '../css/navbar.css'

const Navbar = ({user}) => {

    const logout = () => {
        window.open('http://localhost:5000/auth/logout', '_self')
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
                                src={ user.photos[0].value }
                                alt=""
                                className="navbar-avatar"
                            />
                        </li>
                        <li className="navbar-list-item">
                            { user.displayName }
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