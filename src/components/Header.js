import React from 'react';
import Navbar from './Navbar';
import './styles/Header.css';

function Header() {
    return(
        <div id="header">
            <div id="title-subtitle-container">
                <div id="title-container">
                    <h1 id="title-1">Julianne</h1>
                    <h1 id="title-2">Michelle</h1>
                    <h1 id="title-3">Jaeger</h1>
                </div>
                <div id="subtitle-container">
                    <h2 id="subtitle-1">Web<span style={{color: "transparent"}}>.</span>and</h2>
                    <h2 id="subtitle-2">Software</h2>
                    <h2 id="subtitle-3">Engineer</h2>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default Header;