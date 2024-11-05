import React, { useEffect, useState } from 'react';
import './portofolio.css'

import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { textVariant } from '../../utils/motion'
import { fadeIn } from '../../utils/motion'
import {Tilt} from 'react-tilt'
import { Link } from 'react-router-dom';
import projects from '../../components/portofolio/projetcs';



const Portofolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <motion.div  variants={textVariant()}>
        <section className='portofolio' id='portofolio'>
          <h5>My Recent Work</h5>
          <h2>Project</h2>
        </section>
      </motion.div>
      
      <div className="container portofolio__container" style={{ marginBottom: '100px' }}>
         {projects.map((project, index) => {
       // Get the middle index
        const middleIndex = Math.floor(projects.length / 2);

        // Calculate the distance from the middle index
        const distanceFromMiddle = Math.abs(index - middleIndex);

        // Determine the animation variant based on the index position
        let animationVariant;
        if (distanceFromMiddle === 0) {
          animationVariant = textVariant(0.5);
        } else {
          const animationDirection = index < middleIndex ? "right" : "left";
          animationVariant = fadeIn(animationDirection, "", distanceFromMiddle * 0.8, 0.75);
        }
        // Show the elements starting from the middle and moving outward
        return (
          <motion.div variants={!isMobile? animationVariant :  fadeIn("up", "spring", index * 0.9, 0.75)}>
            <Tilt
                options={{ 
                    max: 30,
                    scale: 1.1,
                    speed: 350
                }}
            >
              <article className='portofolio__item' key={index}>
                <div className="portofolio__item-image">
                  <a href={project.readme} target="_blank" rel="noreferrer">
                    <img src={project.img} alt="" />
                  </a>
                </div>
                <h3>
                  <a href={project.readme} style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                <div className="portofolio__item-cta">
                  <a href={project.github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  <a href={project.demo} className='btn btn-primary' target="_blank" rel="noreferrer">Demo</a>
                  <Link to={project.link} className='btn btn-primary'>Preview</Link>
                </div>
              </article>
            </Tilt>
        </motion.div>);
         })}
      </div>
  </>
  )
}

export default SectionWrapper(Portofolio, "portofolio") 




