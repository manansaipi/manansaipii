import React, { useEffect }  from 'react'
import './header.css'
// eslint-disable-next-line
import Lottie from 'lottie-react'
// eslint-disable-next-line
import animationData from '../../assets/81333-github.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'

const Header = () => {
 useEffect(() => {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["manansaipi"];
    const typingDelay = 200;
    const erasingDelay = 200;
    const newTextDelay = 2500;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);

    return () => clearTimeout(type);
  }, []);
  return (
    <header>
    <div className="home">
      <div className="container header__container" >

        <section id="home" >
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid text">
          <h2 className="display-4">about & contact</h2>
          <h1 className="h1">Hi, I’m <span className="span elvina typed-text"></span><span className="cursor">&nbsp;</span></h1>
          <h3 className="lead">President University Student</h3>  
              <div className="sosial-media">
                   <a href="https://www.linkedin.com/in/abdulmannansaipi/" target="blank"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                  <a href="https://github.com/manansaipi" target="blank"><i className="fab fa-github fa-2x"></i></a>
               
                  <a href="https://www.instagram.com/manansaipi/" target="blank"><i className="fab fa-instagram fa-2x"></i>
                  </a>
            
              </div>
        </div>
      </div>
    </section>


      </div>
      <div className='absolute xs:bottom-10 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[30px] h-[60px] rounded-3xl border-4 custom-border-class flex justify-center items-start p-1'>
            <motion.dev 
              animate={{ 
                y: [0,24,0]
               }}
               transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      </div>
    </header>
  )
}

export default Header