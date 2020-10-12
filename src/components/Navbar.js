import React from 'react';
import './styles/Navbar.css';

function Navbar() {
    return(
        <div id="navbar">
            <ul id="navbar-container">
                <a href="#about">
                    <li className="nav-item">
                        About
                    </li>
                </a>
                <a href="#experience">
                    <li className="nav-item">
                        Experience
                    </li>
                </a>
                <a href="#education">
                    <li className="nav-item">
                        Education
                    </li>
                </a>
                <a href="#skills">
                    <li className="nav-item">
                        Skills
                    </li>
                </a>
                <a href="#contact">
                    <li className="nav-item">
                        Contact
                    </li>
                </a>
            </ul>
        </div>
    );
}

export default Navbar;