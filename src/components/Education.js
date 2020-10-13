import React from 'react';
import Navbar from './Navbar';
import './styles/Education.css';
import education from '../data/education.json';

function Education() {
    const educationItems = education.map((ed) => {
        return(
            <div>
                <h2>{ed.title}</h2>
                <h3>{ed.school} • {ed.timeframe}</h3>
                <p>{ed.description}</p>
            </div>
        );
    })
    return(
        <div id="education">
            <div id="education-title-container">
                <h1>Education</h1>
                <Navbar />
            </div>
            <div id="education-info-container">
                {educationItems}
            </div>
        </div>
    );
}

export default Education;