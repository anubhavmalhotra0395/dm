import React from 'react'
import Video from './video-2.mp4'
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src={Video} autoPlay loop muted className='bg-video'/>
            <h4>DIGITAL PRODUCTS</h4>
            <p>Get your Digital Product Today!</p>
            <div className="hero-btns">
               <Link to='/ContactUs'> <button
                 className="btn--outline"
                 >CONTACT NOW</button></Link>
            </div>
        </div>
    );
}

export default HeroSection