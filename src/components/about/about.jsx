import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/boben.png'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Client</h5>
              <small>-</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Project</h5>
              <small>5+</small>
            </article>
          </div>

          <p>
            I'm a student from President University studying Information Technology. I am deeply passionate about programming and highly skilled in languages such as PHP and Dart. I have a strong understanding of frameworks like Laravel and Flutter. Additionally, I have experience in database management and computer networking. Currently, I am expanding my skills by learning Node.js to build RESTful APIs. As part of the Bangkit Academy, I have been exploring cloud computing on Google Cloud Platform (GCP) and building a cloud-based Android app. With a strong academic record and participation in relevant extracurricular activities, I am motivated to continuously improve my skills. I am excited to apply my knowledge and abilities to real-world problems and make a positive impact in the field of technology.
          </p>
        </div>
      </div>


    </section>
    

  )
}

export default about