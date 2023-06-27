import React from 'react';
import './portofolio.css'
import IMG1 from '../../assets/all-ticket.png'
import IMG2 from '../../assets/admin-dashboard.png'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { textVariant } from '../../utils/motion'
import { fadeIn } from '../../utils/motion'


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
  }
]
const portofolio = () => {

  return (
    <>
      <motion.div  variants={textVariant()}>
        <section className='portofolio' id='portofolio'>
          <h5>My Recent Work</h5>
          <h2>Project</h2>
        </section>
      </motion.div>
      
      <div className="container portofolio__container" style={{ marginBottom: '100px' }}>
         {projects.map((project, index) => (
      <motion.div  variants={fadeIn("up", "spring", index * 0.6, 0.75)}>
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
      </motion.div>
          ))}
      </div>
  </>
  )
}

export default SectionWrapper(portofolio, "portofolio") 




