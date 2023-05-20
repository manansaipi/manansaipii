import React, { useEffect }  from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
      <div className="container header__container">

        <section id="home">
      <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid text">
          <h2 class="display-4">about & contact</h2>
          <h1 class="h1">Hi, I’m <span class="span elvina typed-text"></span><span class="cursor">&nbsp;</span></h1>
          <h3 class="lead">President University Student</h3>  
         
              <div class="sosial-media">
                   <a href="https://www.linkedin.com/in/abdulmannansaipi/" target="blank"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                
                  <a href="https://github.com/manansaipi" target="blank"><i class="fab fa-github fa-2x"></i></a>
               
                  <a href="https://www.instagram.com/manansaipi/" target="blank"><i class="fab fa-instagram fa-2x"></i>
                  </a>
            
              </div>
        </div>
      </div>
    </section>


      </div>
    </header>
  )
}

export default Header