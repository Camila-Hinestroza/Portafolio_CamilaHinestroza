import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/">Banner</Link>
                <Link to="/central">informacion</Link>
                <a href="#pie-de-pagina">Contacto</a> 
            </div>
        </nav>
    );
};

export default Navbar;