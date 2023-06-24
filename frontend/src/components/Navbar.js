import '../css/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="navbar-title">NASA Daily Image Generator</span>
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
        </div>
    )
}

export default Navbar;