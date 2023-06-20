// SplashScreen.js
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './splashScreen.css';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  const fadeProps = useSpring({
    opacity: showSplash ? 1 : 0,
    config: { duration: 1000 },
    delay: 500, // Delay before starting the animation
    onRest: () => {
      if (!showSplash) {
        // Hide splash screen after the animation completes
        setShowSplash(false);
      }
    },
  });

  if (showSplash) {
    return (
      <animated.div className="splash-screen" style={fadeProps}>
        <animated.div className="motion-graphic" style={fadeProps}>
          {/* Your motion graphic animation content here */}
          <h1>Hello, World!</h1>
          <p>This is a sample motion graphic animation.</p>
        </animated.div>
      </animated.div>
    );
  }

  return null;
};

export default SplashScreen;
