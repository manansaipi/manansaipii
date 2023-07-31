import React, { useEffect, useState } from 'react';
import './portofolio.css'
import IMG1 from '../../assets/all-ticket.png'
import IMG2 from '../../assets/admin-dashboard.png'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { textVariant } from '../../utils/motion'
import { fadeIn } from '../../utils/motion'
import {Tilt} from 'react-tilt'


const projects = [
  {
    title: "Ticketing Web Application",
    github: "https://github.com/manansaipi/FinalPDT",
    readme: "https://github.com/manansaipi/FinalPDT#ticketing-web-application",
    demo: "https://www.youtube.com/watch?v=X61UqD_2ywQ&ab_channel=AbdulMannanSaipi",
    img: IMG1
  },
  {
    title: "To-do list Mobile Application",
    github: "https://github.com/manansaipi/final_wpm",
    readme: "https://github.com/manansaipi/final_wpm#to-do-list-mobile-application",
    demo: "https://drive.google.com/file/d/1s6V5Nzl7FXEbAWJ9MVQ39xdk62G8iuud/view",
    img: "https://img.youtube.com/vi/hubttbMuBt0/0.jpg"
  },
  {
    title: "Ticketing Web Application (Laravel)",
    github: "https://github.com/manansaipi/finalssip",
    readme: "https://github.com/manansaipi/finalssip#ticketing-web-application",
    demo: "https://drive.google.com/file/d/11ZjAQnNHXwOAOayjev5PypllmgN1MXXl/view?usp=sharing",
    img: IMG2
  },
  {
    title: "Serfee - API",
    github: "https://github.com/manansaipi/Serfee-API",
    readme: "https://github.com/manansaipi/Serfee-API#serfee-api",
    demo: "https://drive.google.com/file/d/1BZohtD-g2eFuzjwvxezZKuioRYNhkCmc/view?resourcekey",
    img: "https://avatars.githubusercontent.com/u/135983300?s=200&v=4"
  }
]
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




