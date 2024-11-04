// ProjectDetail.js

import React, { useEffect, useRef } from 'react';

import { useParams, Link } from 'react-router-dom';
import projects from '../../components/portofolio/projetcs';
import './ProjectDetail.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faDiceFive } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.ID === parseInt(id));

  const contentRef = useRef(null);
  const textRef = useRef(null); // New ref for the text

  useEffect(() => {
    // gsap.from(contentRef.current, {
    //   opacity: 0,
    //   y: 20,
    //   duration: 0.5,
    //   ease: 'power1.out',
    // });

    if (textRef.current) {
      gsap.to(textRef.current, {
        x:800,
        duration: 5,
        scrollTrigger: {
          trigger: textRef.current,
          pin: true,
          toggleActions: 'play play play reverse',
          scrub: 8,
          start: 'bottom 40%', // When the top of the text hits 80% of the viewport height
          end: 'bottom 10%', // Optional: when the bottom hits 60%
          markers: true, // Uncomment for debugging
        },
      })
      // gsap.from(textRef.current, {
      //   scale: 0.8,
      //   opacity: 0,
      //   duration: 1,
      //   ease: 'power2.out',
      //   scrollTrigger: {
      //     trigger: textRef.current,
      //     start: 'top 40%', // When the top of the text hits 80% of the viewport height
      //     end: 'bottom 60%', // Optional: when the bottom hits 60%
      //     toggleActions: 'play none none none',
      //     markers: true, // Uncomment for debugging
      //   },
      // });
    }

    // Cleanup function to kill ScrollTrigger instances when the component unmounts
    // return () => {
    //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // };
    
  }, []);

  if (!project) {
    return (
      <div className="project-detail">
        <h2>Project Not Found</h2>
        <Link to="/portofolio" className='btn'>Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className='main'>
      <div className="project-detail flex justify-center items-center h-screen"  ref={contentRef}>
        <p className="text-[20px] text-black text-center" ref={textRef}>
            {/* <b>Dedicated</b> to all impaired people who demonstrate incredible resilience and determination. */}
            <b>Dedicated</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur?
        </p>
    
        {/* <Link to="/" className="btn mt-4">Back to Home</Link> */}
      </div>

      <div className='h-screen'>tes</div>
    </div>
  );
};

export default ProjectDetail;
