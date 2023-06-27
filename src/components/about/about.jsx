import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/boben.png'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { fadeIn, textVariant, zoomIn } from '../../utils/motion'

const cards = [
  {
    icon: <FaAward className='about__icon' />,
    title: "Experience",
    content: "1+ Years",
  },
  {
    icon: <VscFolderLibrary className='about__icon' />,
    title: "Project",
    content: "10+",
  },
  {
    icon: <AiFillStar className='about__icon' />,
    title: "Rank",
    content: "Mytical Glory",
  },
  
]

const about = () => {
  return (
    <> 

      <div className="about">
        <motion.div  variants={textVariant()}>
          <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
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
                  <article className='about__card' key={index}>
                    <div className="about__icon flex justify-center items-center mb-1">
                      {card.icon}
                    </div>
                    <h5>{card.title}</h5>
                    <small>{card.content}</small>
                  </article>
                </motion.div>
              ))}
            </div>
            <motion.div  variants={fadeIn("up","", 1, 0.75)}>
              <p>
                I'm a student from President University studying Information Technology. I am deeply passionate about programming and highly skilled in languages such as PHP and Dart. I have a strong understanding of frameworks like Laravel and Flutter. Additionally, I have experience in database management and computer networking. Currently, I am expanding my skills by learning Node.js to build RESTful APIs. As part of the Bangkit Academy, I have been exploring cloud computing on Google Cloud Platform (GCP) and building a cloud-based Android app. With a strong academic record and participation in relevant extracurricular activities, I am motivated to continuously improve my skills. I am excited to apply my knowledge and abilities to real-world problems and make a positive impact in the field of technology.
              </p>
            </motion.div>

          </div>
        </div>
      </div>


    
  </>
  )
}

export default SectionWrapper(about, "about") 