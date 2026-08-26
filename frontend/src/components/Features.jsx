import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
        }
      });

      // Animates the 6 feature cards popping up one after another
      tl.fromTo(".feature-box", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );

    }, sectionRef);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="features-section" id="features">
      
      <div className="stats-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <p className="hero-label">WHY OUR SYSTEM?</p>
        <h2 style={{ fontSize: '40px' }}>Everything you need to scale.</h2>
      </div>

      <div className="features-grid">
        
        {/* Feature 1 */}
        <div className="feature-box">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7l10-5 10 5-10 5L2 7zm0 0l10 5 10-5M2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3>Manage Fields</h3>
        </div>

        {/* Feature 2 */}
        <div className="feature-box">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V12M12 12C12 7 8 2 2 2c0 6 5 10 10 10zM12 12c0-5 4-10 10-10 0 6-5 10-10 10z"/>
            </svg>
          </div>
          <h3>Track Crops</h3>
        </div>

        {/* Feature 3 */}
        <div className="feature-box">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <h3>Manage Finances</h3>
        </div>

        {/* Feature 4 */}
        <div className="feature-box">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3>Manage Workers</h3>
        </div>

        {/* Feature 5 */}
        <div className="feature-box">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          </div>
          <h3>Track Inventory</h3>
        </div>

        {/* Feature 6 */}
        <div className="feature-box">
          <div className="icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/>
              <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
              <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
              <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
              <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
            </svg>
          </div>
          <h3>AI Assistance</h3>
        </div>

      </div>
    </section>
  );
}