import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GrowingRice() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000", 
          scrub: 1,
          pin: true,
        },
      });

      // 1. Stem grows + Step 1 pops up from below
      tl.fromTo(".stem", 
        { scaleY: 0, transformOrigin: "bottom" },
        { scaleY: 1, duration: 2, ease: "none" }
      )
      .fromTo(".step-1", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1 }, 
        "<" 
      );

      // 2. Leaves sprout + Step 1 vanishes up + Step 2 pops up
      tl.fromTo(".leaf-left",
        { scale: 0, opacity: 0, transformOrigin: "right bottom" },
        { scale: 1, opacity: 1, duration: 1 }
      )
      .fromTo(".leaf-right",
        { scale: 0, opacity: 0, transformOrigin: "left bottom" },
        { scale: 1, opacity: 1, duration: 1 },
        "<"
      )
      .to(".step-1", 
        { opacity: 0, y: -50, duration: 0.5 }, 
        "<" // Step 1 disappears as leaves start
      ) 
      .fromTo(".step-2", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1 }, 
        "<+=0.2" // Step 2 pops in slightly after Step 1 leaves
      );

      // 3. Rice head appears + Step 2 vanishes up + Step 3 pops up
      tl.fromTo(".rice-head",
        { opacity: 0, scale: 0, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1 }
      )
      .fromTo(".grain",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
        "<"
      )
      .to(".step-2", 
        { opacity: 0, y: -50, duration: 0.5 }, 
        "<" // Step 2 disappears as grains appear
      ) 
      .fromTo(".step-3", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1 }, 
        "<+=0.2" // Step 3 pops in
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="rice-section">
      <div className="rice-content">
        

        <div className="plant-area">
          <svg width="350" height="600" viewBox="0 0 350 600">
            <path className="stem" d="M175 550 C175 450 175 350 175 200" stroke="#4ade80" strokeWidth="12" fill="none" />
            <path className="leaf-left" d="M175 390 C110 340 70 320 35 330" stroke="#22c55e" strokeWidth="15" fill="none" strokeLinecap="round" />
            <path className="leaf-right" d="M175 330 C230 280 275 270 315 285" stroke="#22c55e" strokeWidth="15" fill="none" strokeLinecap="round" />
            <path className="rice-head" d="M175 200 C195 160 220 130 245 110" stroke="#facc15" strokeWidth="10" fill="none" strokeLinecap="round" />
            <g className="rice-head">
              <ellipse className="grain" cx="250" cy="105" rx="15" ry="8" fill="#fef08a" transform="rotate(-25 250 105)" />
              <ellipse className="grain" cx="265" cy="125" rx="15" ry="8" fill="#fef08a" transform="rotate(-20 265 125)" />
              <ellipse className="grain" cx="245" cy="145" rx="15" ry="8" fill="#fef08a" transform="rotate(-25 245 145)" />
              <ellipse className="grain" cx="275" cy="150" rx="15" ry="8" fill="#fef08a" transform="rotate(-20 275 150)" />
            </g>
          </svg>
        </div>

        <div className="text-area">
          <p className="hero-label">SMART PADDY MANAGEMENT</p>
          <h2>Grow Smarter.<br />Harvest Better.</h2>
          
          {/* Dynamic Swapping Text Container */}
          <div style={{ position: 'relative', height: '100px', marginTop: '60px' }}>
            <h3 className="step-1" style={{ position: 'absolute', top: 0, left: 0, margin: 0, fontSize: '42px', fontWeight: 'bold', color: '#ffffff', opacity: 0 }}>
              1. Create an Account
            </h3>
            <h3 className="step-2" style={{ position: 'absolute', top: 0, left: 0, margin: 0, fontSize: '42px', fontWeight: 'bold', color: '#22c55e', opacity: 0 }}>
              2. Map Your Field
            </h3>
            <h3 className="step-3" style={{ position: 'absolute', top: 0, left: 0, margin: 0, fontSize: '42px', fontWeight: 'bold', color: '#facc15', opacity: 0 }}>
              3. Get Live Insights
            </h3>
          </div>
        </div>


      </div>
    </section>
  );
}