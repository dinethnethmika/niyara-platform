import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import GrowingRice from '../components/GrowingRice.jsx';
import Features from '../components/Features.jsx';
import About from '../components/About.jsx';
import FianlCta from '../components/FinalCta.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <GrowingRice />
            <Features />
            <About />
            <FianlCta />
            <Footer />
        </div>
    );
} 
    