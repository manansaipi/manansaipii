import React, { useEffect, useState } from 'react';
import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'

import './tech.css';

const Tech = () => {
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
  return <div className="tech flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => {
        // Get the middle index
        const middleIndex = Math.floor(technologies.length / 2);

        // Calculate the distance from the middle index
        const distanceFromMiddle = Math.abs(index - middleIndex);

        // Determine the animation variant based on the index position
        let animationVariant;
        if (distanceFromMiddle === 0) {
          animationVariant = textVariant();
        } else {
          const animationDirection = index < middleIndex ? "right" : "left";
          animationVariant = fadeIn(animationDirection, "", distanceFromMiddle * 0.6, 0.75);
        }
        console.log(index);
        // Show the elements starting from the middle and moving outward
        return (
          <motion.div variants={!isMobile? animationVariant :  fadeIn("right", "", index * 0.6, 0.75)}>
            <div className="w-28 h-28" key={index}>
              <BallCanvas icon={technology.icon} />
            </div>
          </motion.div>
        );
    })}

  </div>
};

export default SectionWrapper(Tech, '');
