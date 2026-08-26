import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".footer-inner", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%", // Triggers right as the top of the footer hits the bottom of the screen
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer-section">
      <div className="footer-inner">
        <div className="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <div className="logo" style={{ fontSize: '24px', marginBottom: '15px' }}>
              Niyara<span style={{ color: '#4ade80' }}>.</span>
            </div>
            <p className="footer-text">
              The complete management solution for modern paddy farming in Sri Lanka.
            </p>
          </div>

          {/* Column 2: Product Links */}
          <div className="footer-col">
            <h4>PRODUCT</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#home">Get Started</a>
          </div>

          {/* Column 3: Company Links */}
          <div className="footer-col">
            <h4>SUPPORT & COMPANY</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>

          {/* Column 4: Contact Info with Icons */}
          <div className="footer-col contact-col">
            <h4>CONTACT</h4>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <span>hello@niyara.com</span>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <span>+94 70 123 4567</span><br/>
                <span>+94 11 234 5678</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Niyara (Private) Limited</strong><br/>
                <span>Colombo, Western Province,<br/>Sri Lanka.</span>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Niyara (Private) Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}