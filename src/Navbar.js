import React, {useState} from 'react';
import { HashLink as Link} from 'react-router-hash-link'
import './Navbar.css'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {

const [click, setClick] = useState(false);

const handleClick = () =>  setClick(!click);
const closeMobileMenu = () => setClick(false);

const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
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
                    <Link to="#aboutus"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    className='nav-links' onClick={closeMobileMenu}>About Us</Link>
                    </li>

                    <li className="nav-item">
                    <Link to="#services" 
                     smooth={true} duration={500} spy={true} exact='true' offset={-80}
                     className='nav-links' onClick={closeMobileMenu}>Services</Link>
                    </li>

                    <li className="nav-item">
                    <Link to="#contact"
                     smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar