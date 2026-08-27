import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  
  // This state tracks if the form has been submitted yet
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later, we will add the backend code here to save the data to MySQL!
    // For now, we just flip the screen to the "Success" state.
    setIsSubmitted(true);
  };

  return (
    <div className="app-container login-wrapper auth-background">
      
      {/* We make the card slightly wider for a bigger form */}
      <div className="login-card" style={{ maxWidth: '500px' }}>
        
        {!isSubmitted ? (
          <>
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Request Access</h2>
            <p style={{ textAlign: 'center', color: '#9ca3af', marginBottom: '25px', fontSize: '14px' }}>
              Submit your details. An administrator will review your application before granting platform access.
            </p>
            
            <form className="login-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" className="login-input" required />
              <input type="text" placeholder="NIC Number" className="login-input" required />
              <input type="tel" placeholder="Phone Number (+94)" className="login-input" required />
              <input type="email" placeholder="Email Address" className="login-input" required />
              <input type="password" placeholder="Password" className="login-input" required />
              
              <button type="submit" className="primary-btn" style={{ width: '100%', marginTop: '10px' }}>
                Submit Application
              </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '20px', color: '#9ca3af', fontSize: '14px' }}>
              Already have an account?{' '}
              <span className="auth-link" onClick={() => navigate('/login')}>Sign in</span>
            </p>
          </>
        ) : (
          
          /* THE PENDING APPROVAL SCREEN */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>⏳</div>
            <h2 style={{ marginBottom: '15px' }}>Application Received</h2>
            <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '30px' }}>
              Thank you for registering. Your account is currently pending admin approval. 
              You will receive a notification once your access is granted.
            </p>
            <button onClick={() => navigate('/')} className="primary-btn" style={{ width: '100%' }}>
              Return to Home
            </button>
          </div>
          
        )}
        
      </div>
    </div>
  );
}