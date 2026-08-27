import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="app-container login-wrapper auth-background">
      <div className="login-card">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome Back</h2>
        
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email Address" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          
          <button type="submit" className="primary-btn" style={{ width: '100%', marginTop: '10px' }}>
            Sign In
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#9ca3af', fontSize: '14px' }}>
          Don't have an account?{' '}
          {/* Now this routes directly to the new Signup page! */}
          <span className="auth-link" onClick={() => navigate('/signup')}>Request Access</span>
        </p>
        
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Home
        </button>
      </div>
    </div>
  );
}