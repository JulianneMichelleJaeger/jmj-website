import React from 'react';
import './styles/Navbar.css';

function Navbar() {
    return(
        <div id="navbar">
            <ul id="navbar-container">
                <li className="nav-item">
                    About
                </li>
                <li className="nav-item">
                    Experience
                </li>
                <li className="nav-item">
                    Education
                </li>
                <li className="nav-item">
                    Skills
                </li>
                <li className="nav-item">
                    Contact
                </li>
            </ul>
        </div>
    );
}

export default Navbar;