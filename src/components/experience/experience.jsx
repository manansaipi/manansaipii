import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../../constants'
import { textVariant } from '../../utils/motion'
import './experience.css'
import { SectionWrapper } from '../../hoc'

const ExperienceCard = ({ experiences }) => {
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
    <VerticalTimelineElement
      contentStyle={{ background: '#e7e6e6', color: '#111' }}
      contentArrowStyle={{ borderRight: '7px solid #e7e6e6' }}
      date={experiences.date}
      iconStyle={{ background: experiences.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experiences.icon}
            alt={experiences.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className="text-grey text-[24px] font-bold">{experiences.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experiences.company_name}</p>
      </div>
      <ul className={`mt-2 list-disc ${isMobile ? 'ml-0' : 'ml-5'}`}>
        {experiences.points.map((point, index) => (
          <li
            key={`experiences-point-${index}`}
            className="mb-2 text-grey-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <section id='Experience'>
          <h5>What I Have Done So Far</h5>
          <h2>Experience</h2>
        </section>
      </motion.div>
      <div className="container">
        <div className='mt-20 mb-20 flex flex-col'>
          <VerticalTimeline lineColor='gray'>
            {experiences.map((experiences, index) => (
              <ExperienceCard key={index} experiences={experiences} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
      
    </>
  )
}

export default SectionWrapper(Experience, "work")
