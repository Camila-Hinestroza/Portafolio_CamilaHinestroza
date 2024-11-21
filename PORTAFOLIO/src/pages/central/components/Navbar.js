import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/">Banner</Link>
                <Link to="/central">Sobre Mi</Link>
            </div>
        </nav>
    );
};

export default Navbar;