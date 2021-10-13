import React from 'react'
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
          <Navbar />
        <HeroSection />
        <AboutUs />
        <Services />
        <Contact />
        <Footer />
        </>
    );
}

export default Home;