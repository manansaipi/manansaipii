// ProjectDetail.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../../components/portofolio/projetcs';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.ID === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail">
        <h2>Project Not Found</h2>
        <Link to="/portofolio" className='btn'>Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="project-detail flex justify-center items-center h-screen">
      <p className="text-[20px] text-black text-center">
          <b>Dedicated</b> to all impaired people who demonstrate incredible resilience and determination.
      </p>
      {/* <Link to="/" className="btn mt-4">Back to Home</Link> */}
    </div>
  );
};

export default ProjectDetail;
