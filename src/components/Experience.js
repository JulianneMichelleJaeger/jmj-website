import React from 'react';
import Navbar from './Navbar';
import './styles/Experience.css';
import experience from '../data/experience.json';

function Experience() {
    const experienceItems = experience.map((exp) => {
        return(
            <div>
                <h2>{exp.position}</h2>
                <h3>{exp.company} • {exp.timeframe}</h3>
                <p>{exp.description}</p>
            </div>
        );
    })
    return(
        <div id="experience">
            <div id="experience-title-container">
                <h1>Experience</h1>
                <Navbar />
            </div>
            <div id="experience-info-container">
                {experienceItems}
            </div>
        </div>
    );
}

export default Experience;