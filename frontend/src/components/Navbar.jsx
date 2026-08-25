import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() { // <-- Make sure 'export default' is right here!
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">Niyara<span>.</span></div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </div>
      <button className="login-btn" onClick={() => navigate('/login')}>Sign In</button>
    </nav>
  );
}