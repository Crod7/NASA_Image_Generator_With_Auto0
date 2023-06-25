import { Link } from 'react-router-dom';
import '../css/navbar.css'

const Navbar = ({user}) => {
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
                                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                alt=""
                                className="navbar-avatar"
                            />
                        </li>
                        <li className="navbar-list-item">
                            Carlos Rodriguez
                        </li>
                        <li className="navbar-list-item">
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