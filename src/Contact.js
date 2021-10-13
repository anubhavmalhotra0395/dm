import React from 'react'
import './Contact.css'
import Image8 from './svg-9.svg'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (

        <div className="contact-container" id="contact">
            <div className="img-contact">
                <img src={Image8} className="bg-imagec" />
            </div>
            <div className="text-contact">
                <h2 >CONTACT US!</h2>
                <p>Lets end your search for the perfect paid media partner.Get your free discovery consulation now!</p>
                <div className="hero-btns2">
                <Link to='/ContactUs'> <button
                 className="btn--outline"
                 >CONTACT NOW</button></Link>
            </div>
            </div>
        </div>
    )
}

export default Contact
