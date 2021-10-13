import React from 'react'
import Image from './svg-12.svg'
import Image2 from './svg-2.svg'
import Image91 from './svg-91.svg'
import './AboutUs.css'





const AboutUs = () => {
    return (
        <><div className="about-container" id='aboutus'>
            <div className="img-container">
                <img src={Image91} className="bg-image" />
            </div>
            <div className="text-container">
                <h4 >WE ARE A <span style={{color:"#DEA5A4"}}>DIGITAL MARKETING</span> COMPANY!</h4>
                <p>From creating websites, apps to digital branding and online campaigns for companies. We believe in close collaboration, long- term, nurtured business relationships and a multidisciplinary culture which sets us apart from the rest.</p>
            </div>
        </div><div className="about-container2">
        <div className="text-container2">
                    <h4>WHY SHOULD YOU CHOOSE TTF?</h4>
                    <p>We are specifically focused on helping you achieve your commercial objectives in the best possible way. By working together with our clients, our ever-hard-working team will go the extra mile to bring your vision to life and help your brand resonate with your audiences ensuring the highest quality services and a profitable ROI.</p>
                </div>
                <div className="img-container2">
                    <img src={Image} className="bg-image2" />
                </div>
                <div id="services"></div>
            </div></>
        
    )
}

export default AboutUs
