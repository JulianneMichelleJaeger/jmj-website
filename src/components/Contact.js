import React from 'react';
import Navbar from './Navbar';
import './styles/Contact.css';
import email from '../assets/mail-icon-pink.png';
import linkedin from '../assets/linkedin-icon-pink.png';
import indeed from '../assets/indeed-icon-pink.png';

function Contact() {
    return(
        <div id="contact" className="section">
            <div className="title-container">
                <h1>Contact</h1>
                <Navbar />
            </div>
            <div className="info-container" target="_blank">
                <h2>If you have a business inquiry or any other questions, please contact me!</h2>
                <a href="mailto:julithejaeger@gmail.com">
                    <h3>
                        <img src={email} className="icon" /> julithejaeger@gmail.com
                    </h3>
                </a>
                <a href="https://www.linkedin.com/in/julianne-jaeger-085964156/" target="_blank">
                    <h3>
                        <img src={linkedin} className="icon" /> linkedin.com/in/julianne-jaeger-085964156/
                    </h3>
                </a>
                <a href="https://my.indeed.com/p/juliannej-rumvnis" target="_blank">
                    <h3>
                        <img src={indeed} className="icon" /> my.indeed.com/p/juliannej-rumvnis
                    </h3>
                </a>
            </div>
        </div>
    );
}

export default Contact;