import React from 'react'
import ImageLogo from './1.png'
import './Footer.css'

const Footer = () => {
    return (
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>SERVICES</h3>
                        <ul>
                            <li>Web design</li>
                            <li>Development</li>
                            <li>Digital Marketing</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>ADDRESS</h3>
                        <ul>
                        <p>26C Silver Tower<br/>Cluster I, JLT<br/>Dubai, U.A.E.<br/><br/>projects@thethoughtfactory.ae<br/>97150827722</p>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>THE THOUGHT FACTORY</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">TTF © 2021</p>
            </div>
        </footer>
        </div>
    )
}

export default Footer

 