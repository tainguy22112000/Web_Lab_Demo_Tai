import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className = "hero-container">
            <video src = "/videos/video-1.mp4" autoPlay loop muted/>
            <h1>BIOMECH LABORATORY</h1>
            <p className ="wel">Welcome to visit our website !! <br/>
            <p className = "looking">What are you looking for ?</p>
            </p>
            <div className = "hero-btns">
                <button
                className = "btns-1"
                //buttonStyle = 'btn--outline'
                //buttonSize = 'btn--large'
                >
                    GET STARTED
                </button>

                <button
                className = "btns-2"
                //buttonStyle = 'btn--primary'
                //buttonSize = 'btn--large'
                >
                    ABOUT US <i className = 'far fa-play-circle'/>
                </button>

            </div>
        </div>
    );
}

export default HeroSection;