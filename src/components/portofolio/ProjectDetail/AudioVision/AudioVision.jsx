// ProjectDetail.js

import React, { useEffect, useRef } from 'react';

// import { Link } from 'react-router-dom';
// import projects from '../../projetcs';
import './AudioVision.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { faDiceFive } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // optional for smooth scrolling
  });

  const contentRef = useRef(null);
  const textRef = useRef(null); // New ref for the text
  const secondRef = useRef(null); // Ref for the second section

  useEffect(() => {

    window.scrollTo(0, 0);

    // GSAP ScrollTrigger for zoom effect
    gsap.to(textRef.current, {
      scale: 75, // Zoom in (scale 2x, adjust as necessary)
      duration: 3,
      scrollTrigger: {
        trigger: textRef.current,
        pin: true,
        scrub: 1, // Smooth scrub animation
        start: '50% 50%', // When the top of the text hits 80% of the viewport height
        end: '0% 0%', // Optional: when the bottom hits 60%
        onLeave: () => {
          if (textRef.current) {
            textRef.current.style.opacity = 0; // Make the element invisible
          }
        },
        onEnterBack: () => {
          if (textRef.current) {
            textRef.current.style.opacity = 1; // Make the element visible again
          }
        },
        
        // markers: true, // Use for debugging (visual markers for start/end)
      },
    });

    // ScrollTrigger.create({
    //   trigger: secondRef.current,
    //   start: "20% 20%",
    //   markers: true
    // })

    

  }, []);

  return (
    <div className='main'>
      <div className="project-detail flex justify-center items-center h-screen"  ref={contentRef}>
        <p className="text-[20px] text-black text-center" ref={textRef}>
            {/* <b>Dedicated</b> to all impaired people who demonstrate incredible resilience and determination. */}
            <b>Dedicated</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur?
        </p>
    
        {/* <Link to="/" className="btn mt-4">Back to Home</Link> */}
      </div>

      <div className='h-screen flex justify-center items-center' ref={secondRef}>
        <div className="text-[20px] text-black text-center">tes</div>
      </div>
    </div>
  );
};

export default ProjectDetail;
