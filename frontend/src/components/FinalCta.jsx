import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FinalCta() {
  const navigate = useNavigate();

  return (
    <section className="final-section">
      {/* NEW: The Faded Background Image on the Left */}
      <div className="final-background-shard"></div>

      <div className="final-content">
        <p className="hero-label">READY TO CULTIVATE?</p>
        <h2 style={{ fontSize: '48px', marginBottom: '30px' }}>Join the platform today.</h2>
        <button className="primary-btn" onClick={() => navigate('/login')}>Create Account</button>
      </div>
    </section>
  );
}