import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { color, motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../../styles'
import { experiences } from '../../constants'
import { textVariant } from '../../utils/motion'
import './experience.css'
import { SectionWrapper } from '../../hoc'

const ExperienceCard = ({experiences}) => (
   <VerticalTimelineElement
    contentStyle={{ background: '#111', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631'  }}
    date={experiences.date}
    iconStyle={{ background: experiences.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experiences.icon} alt={experiences.company_name} className='w-[60%] h-[60%] object-contain' />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
         {experiences.title} 
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experiences.company_name}</p>
    </div>
    <ul className='mt-2 list-disc ml-5 space-y-2'>
      {experiences.points.map((point, index) => (
        <li
          key={`experiences-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
    {experiences.date}
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <section id='Experience'>
          <h5>What I have done so far</h5>
          <h2>Experience</h2>
      </section>
    </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor='gray'>
          {
            experiences.map((experiences, index) => (
              <ExperienceCard key={index} experiences={experiences}/>
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work") 