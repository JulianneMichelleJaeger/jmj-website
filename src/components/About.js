import React from 'react';
import Navbar from './Navbar';
import './styles/About.css';
import resume from '../assets/resume.pdf';

function About() {
    return(
        <div id="about">
            <div id="about-title-container">
                <h1>About</h1>
                <Navbar />
            </div>
            <div id="info-container">
                <div id="juli"></div>
                <h2>Hello!</h2>
                <p>My name is Julianne Jaeger, and I am a web and software engineer located in Silver Spring, Maryland.</p>
                <p>I have a Bachelor's degree in Computer Science from Towson University, and I am currently working as a software engineer at Mosaic Learning in Columbia, Maryland.</p>
                <p>Though I have experience in all aspects of programming, I am most passionate about front-end desgin and development. I have some background in graphic design, and I enjoy all parts of the front-end process, from creating mock-ups and layouts to implementing them with code.</p>
                <p>The languages and frameworks I most enjoy working in are HTML, CSS, ReactJS, Ember.js, Node.js, and GraphQL.</p>
                <p>Feel free to contact me if you would like to know more!</p>
                <button id="download" onClick={() => window.open(resume)}>
                    Download Resume
                </button>
            </div>
        </div>
    );
}

export default About;