import React from 'react'
import './Services.css'
import Image3 from './svg-3.svg';
import Image4 from './svg-4.svg';
import Image5 from './svg-5.svg';
import Image6 from './svg-6.svg';
import Image7 from './svg-7.svg';

const Services = () => {
    return (
        <>
        <div className="services-container" >
        <h4 className="services-header text-center">OUR SERVICES</h4>
            <div className="card-group"> 
            <div className="card1">
                <img src={Image3} class="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Web Design & Development</h5>
                </div>
            </div>
            <div className="card2">
                <img src={Image4} class="card-img-top2" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Social Media Marketing</h5>
                </div>
            </div>
            <div className="card3">
                <img src={Image5} class="card-img-top3" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Google & Bing Ads</h5>
                </div>
            </div>
            </div>

            <div className="card-group2"> 
            <div className="card3">
                <img src={Image6} class="card-img-top2" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Email Marketing</h5>
                </div>
            </div>
            <div className="card2">
                <img src={Image7} class="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Content Marketing</h5>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Services
