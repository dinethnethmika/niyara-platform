import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background-shard"></div>

      <div className="hero-content">
        <p className="hero-label">ENTERPRISE CULTIVATION</p>
        <h1>The future of <span>Paddy</span> Management.</h1>
        <p className="hero-description">
          Track your seasonal cycles, manage inventory, and predict your harvest 
          using a unified platform built for modern agriculture in Sri Lanka.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}