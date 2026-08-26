import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const countRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", 
        }
      });

      // 1. Fade in the text content
      tl.from(".about-text", { x: -50, opacity: 0, duration: 1 })
      
      // 2. Fade in the map card
      .from(".map-card", { x: 50, opacity: 0, duration: 1 }, "<")
      
      // 3. Spin the registered farmer count (Starts slightly before fade finishes)
      .to({ val: 0 }, {
        val: 1250, // We will eventually pull this from your backend!
        duration: 2.5,
        ease: "power2.out",
        onUpdate: function() {
          if (countRef.current) countRef.current.innerText = Math.floor(this.targets()[0].val).toLocaleString();
        }
      }, "-=0.5");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section">
      <div className="about-container">
        
        {/* LEFT SIDE: The Mission */}
        <div className="about-text">
          <p className="hero-label">OUR MISSION</p>
          <h2 style={{ fontSize: '45px', marginBottom: '20px' }}>Rooted in Tradition.<br/>Powered by Data.</h2>
          <p className="description">
            Niyara was built to secure the future of the Sri Lankan harvest. 
            We are bridging the gap between traditional paddy cultivation and 
            cutting-edge software engineering. 
          </p>
          <p className="description" style={{ marginTop: '15px' }}>
            By replacing guesswork with exact calculations for inventory, seasons, 
            and yields, we empower farmers with the same enterprise-level tools 
            used by top tech companies.
          </p>
        </div>

        {/* RIGHT SIDE: The Map and Counter */}
        <div className="map-card">
          <div className="map-glow"></div>
          
          {/* A stylized SVG outline of Sri Lanka */}
          <svg
  viewBox="0 0 240 360"
  className="sri-lanka-map"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="
      M 92 14
      C 83 13, 76 17, 72 23
      C 69 28, 72 34, 78 37
      C 82 39, 86 42, 88 47
      C 83 50, 76 53, 72 57
      C 67 62, 64 69, 63 76
      C 60 82, 55 88, 50 91
      C 45 94, 40 96, 35 95
      C 31 94, 27 91, 24 92
      C 21 94, 22 98, 26 100
      C 31 103, 37 105, 42 108
      C 45 114, 43 123, 40 132
      C 37 142, 35 152, 35 163
      C 35 176, 37 188, 38 201
      C 39 215, 40 228, 42 241
      C 44 254, 48 269, 53 281
      C 58 293, 67 301, 78 307
      C 88 312, 98 315, 108 313
      C 118 312, 128 308, 137 304
      C 147 300, 157 294, 165 286
      C 174 278, 181 267, 185 255
      C 189 243, 191 231, 191 219
      C 191 208, 190 196, 187 184
      C 185 174, 182 164, 178 153
      C 174 142, 169 131, 165 120
      C 161 109, 157 98, 151 88
      C 146 78, 140 69, 133 61
      C 127 54, 120 48, 113 43
      C 108 39, 104 35, 101 31
      C 99 27, 98 22, 98 18
      C 98 15, 96 14, 92 14
      Z
    "
    fill="rgba(74, 222, 128, 0.10)"
    stroke="#4ade80"
    strokeWidth="2.2"
    strokeLinejoin="round"
    strokeLinecap="round"
  />

  {/* Location dots */}

  <circle
    cx="105"
    cy="111"
    r="4"
    fill="#ffffff"
  />

  <circle
    cx="69"
    cy="177"
    r="4"
    fill="#ffffff"
  />

  <circle
    cx="150"
    cy="164"
    r="4"
    fill="#ffffff"
  />

  <circle
    cx="109"
    cy="276"
    r="4"
    fill="#ffffff"
  />
</svg>

          <div className="counter-box">
            <h3 className="farmer-count">
              <span ref={countRef}>0</span>+
            </h3>
            <p>Farmers Connected</p>
          </div>
        </div>

      </div>
    </section>
  );
}