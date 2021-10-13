import React, { useState } from 'react'
import './ContactUs.css'
import Video from './video-2.mp4'
import emailjs from 'emailjs-com'; 
import Footer from './Footer';
import { HashLink as Link} from 'react-router-hash-link'
import './Navbar.css'
import { animateScroll as scroll } from 'react-scroll';

const ContactUs = () => {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hmdq6zu', 'template_klxyi4r', e.target, 'user_fTQzV3xrtmOAUF4yqQdP3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);

      };

      const [click, setClick] = useState(false);

const handleClick = () =>  setClick(!click);
const closeMobileMenu = () => setClick(false);

const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
      <>
      <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu} onClick={toggleHome}>TTF <i className="fab fa-typo3"></i></Link>
          <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
              </li>

              <li className="nav-item">
              <Link to="/"
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              className='nav-links' onClick={closeMobileMenu}>About Us</Link>
              </li>

              <li className="nav-item">
              <Link to="/" 
               smooth={true} duration={500} spy={true} exact='true' offset={-80}
               className='nav-links' onClick={closeMobileMenu}>Services</Link>
              </li>

              <li className="nav-item">
              <Link to="/"
               smooth={true} duration={500} spy={true} exact='true' offset={-80}
              className='nav-links' onClick={closeMobileMenu}>Contact</Link>
              </li>
          </ul>
      </div>
  </nav>







        <div>
            <div class="contactme" id="contact">
            <video src={Video} autoPlay loop muted className='bg-video'/>
        <div class="contactOverlay">
        <h4 className="ook">WRITE TO US :)</h4>
          <div class="container ">
              <div>
              <div class="form">
              {result ?<form className="ok2">
                  <div class="loader-inner">
                        <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                        </div>
                        <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                        </div>
                        <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                        </div>
                        <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                        </div>
                        <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                </div> 
                <div className="thankyou">
                     <p className="thankyou2">Your message has reached us. We will Contact you soon! </p>
                </div>
                </form> :  
              <form action="" onSubmit={sendEmail}>
                <div class="formWord">
                  <span>Full Name</span>
                  <br />
                  <input class="input100" type="text" name="fullName" required />
                  <br />
                  <span>Phone Number</span>
                  <br />
                  <input class="input100" type="text" name="phone" required />
                  <br />
                  <span>Enter Email</span>
                  <br />
                  <input class="input100" type="text" name="email" />
                  <br />
                </div>
                <div class="formWord">
                  <span>Message</span>
                  <br />
                  <textarea name="message"></textarea>
                  <br />
                  <button>SUBMIT</button>
                </div>
              </form>
            }
           
            </div>
            </div>
          </div>
        </div>
      </div>
            <Footer />
        </div>
        </>
    )
}

export default ContactUs
