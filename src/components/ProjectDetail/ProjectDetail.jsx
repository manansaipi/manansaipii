// ProjectDetail.js

import React, { useEffect, useRef } from 'react';

import { useParams, Link } from 'react-router-dom';
import projects from '../../components/portofolio/projetcs';
import './ProjectDetail.css';
import gsap from 'gsap';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.ID === parseInt(id));

  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power1.out',
    });
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
    <div className="project-detail flex justify-center items-center h-screen"  ref={contentRef}>
      <p className="text-[20px] text-black text-center">
          {/* <b>Dedicated</b> to all impaired people who demonstrate incredible resilience and determination. */}
          <b>Dedicated</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur?
      </p>
      {/* <Link to="/" className="btn mt-4">Back to Home</Link> */}
    </div>
  );
};

export default ProjectDetail;
