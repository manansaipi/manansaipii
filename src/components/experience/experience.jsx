import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../../styles'
import { experiences } from '../../constants'
// import { SectionWraper } from '../../hoc'
import { textVariant } from '../../utils/motion'
import './experience.css'

const experience = () => {
  return (
    <>
    <section id='experience'>
        <h5>What I have done so far</h5>
        <h2>Experience</h2>
      <motion.div variants={textVariant()}>
        
      </motion.div>
    </section>
      
    </>
  )
}

export default experience