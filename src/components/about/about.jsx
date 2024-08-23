import React from 'react'
import {Tilt} from 'react-tilt'
import './about.css'
import { FaAward } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/boben.png'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { fadeIn, textVariant } from '../../utils/motion'

const cards = [
  {
    icon: <FaAward className='about__icon' />,
    title: "Experience",
    content: "1+ Years",
  },
  {
    icon: <VscFolderLibrary className='about__icon' />,
    title: "Project",
    content: "20+",
  },
  {
    icon: <AiFillStar className='about__icon' />,
    title: "Rank",
    content: "Mytical Immortal",
  },
  
]

const about = () => {
  return (
    <>

      <div className="about">
        <motion.div  variants={textVariant()}>
          <section id='about'>
            <h5>Get To Know</h5>
            <h2>Me</h2>
          </section>
        </motion.div>
          <div className="container about__container" >
        <motion.div variants={fadeIn("right","", 0.5, 0.75)}>
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="me" />
              </div>
            </div>
          </motion.div>

          <div className="about__content">
            <div className="about__cards">
              {cards.map((card, index) => (
                <motion.div  variants={fadeIn("left","", index * 0.5, 0.75)}>
                  <Tilt
                    options={{ 
                      max: 50,
                      scale: 1.15,
                      speed: 450
                     }}
                  >
                    <article className='about__card' key={index}>
                      <div className="about__icon flex justify-center items-center mb-1">
                        {card.icon}
                      </div>
                      <h5>{card.title}</h5>
                      <small>{card.content}</small>
                    </article>
                  </Tilt>
                </motion.div>
              ))}
            </div>
            <motion.div  variants={fadeIn("up","", 1, 0.75)}>
              <p>
                My name is Abdul Mannan Saipi. I am a student at President University pursuing Bachelor's Degree in Information Technology. I am deeply passionate about programming. Proficient in PHP and Dart, I have a strong understanding of frameworks like Laravel and Flutter. Currently, I am expanding my skills by learning Node.js, particularly focusing on the Express.js framework, to build RESTful APIs. As part of the Bangkit Academy, I have been exploring cloud computing on the Google Cloud Platform (GCP). With a strong academic record and participation in relevant extracurricular activities, I am motivated to continuously improve my skills. I am excited to apply my knowledge and abilities to realworld problems and make a positive impact in the field of technology.
              </p>
            </motion.div>

          </div>
        </div>
      </div>


    
  </>
  )
}

export default SectionWrapper(about, "about") 