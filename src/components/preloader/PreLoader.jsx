import React, { useEffect } from 'react'
import { preLoaderAnim } from '../../utils/anim'
import './preloader.css'

const PreLoader = () => {

  useEffect(() => {
    // Call preLoaderAnim to handle any animations or setup
    preLoaderAnim();

    // Use native DOM API for animations
    const loadingElement = document.querySelector('#loading');
    const loadingTextElement = document.querySelector('.loading-text');
    const bgAnimasiElement = document.querySelector('.bg-animasi');

    const wordAnimation = (params = '[word-animation]', speed = 130) => {
      let elements = [];
      if (params.nodeType && params.nodeType === Node.ELEMENT_NODE) {
        elements = [params];
      } else {
        elements = document.querySelectorAll(params);
      }

      elements.forEach((el) => {
        const a = el.querySelector('a');
        const tulisan = el.getAttribute('word-animation');
        if (a) a.innerHTML = '';
        else el.innerHTML = '';

        if (!tulisan) return;
        const wordArray = tulisan.split('');
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const string = numbers + letters;

        wordArray.forEach((char, i) => {
          const span = document.createElement('span');
          span.setAttribute('data-final', char);
          span.innerHTML = string.charAt(Math.random() * string.length);
          if (a) a.appendChild(span);
          else el.appendChild(span);
        });

        const allCounters = a ? a.querySelectorAll('span') : el.querySelectorAll('span');
        allCounters.forEach((el2, index) => {
          const final = el2.getAttribute('data-final');
          if (final !== ' ') {
            let duration = speed + index * speed;
            const interval = setInterval(() => {
              el2.innerText = string.charAt(Math.random() * string.length);
              duration -= speed;
              if (duration <= 0) {
                clearInterval(interval);
                el2.innerText = final;
              }
            }, speed);
          } else {
            el2.innerText = ' ';
          }
        });
      });
    };

    setTimeout(() => {
      if (loadingElement) loadingElement.classList.add('close');
      if (loadingTextElement) {
        loadingTextElement.setAttribute('word-animation', 'WELCOME');
        wordAnimation('.loading-text');
      }
      setTimeout(() => {
        if (bgAnimasiElement) bgAnimasiElement.style.display = 'block';
        if (loadingElement) loadingElement.style.display = 'none';
      }, 3500 * 1.2);
    }, 4500 * 1.2);

    setTimeout(() => {
      wordAnimation('.loading-text');
    }, 1900);

  }, []);

  return (
    <div class="loading-wrapper" id="loading">
    <div class="bg-mobile">
      <div class="big-slash">
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
      </div>
    </div>
    <div class="loading-text" word-animation="HEY THERE!"></div>
    <div class="loading-animation">

      <div class="box-left"></div>
      <div class="box-right"></div>
      <div class="morse-left">

        <div class="dot hide-lg hide-xl"></div>
        <div class="dot hide-lg  hide-xl"></div>
        <div class="dash hide-lg  hide-xl"></div>
        <div class="dot hide-lg  hide-xl"></div>
        <div class="dot hide-lg  hide-xl"></div>
        <div class="dash hide-lg  hide-xl"></div>
        <div class="dash hide-lg"></div>
        <div class="dash hide-lg"></div>
        <div class="dot hide-lg"></div>
        <div class="dash hide-lg"></div>
        <div class="dash hide-lg"></div>
        <div class="dot hide-lg"></div>
        <div class="dot hide-lg"></div>
        <div class="dot hide-md"></div>
        <div class="dash hide-md"></div>
        <div class="dot hide-md"></div>
        <div class="dash hide-md"></div>
        <div class="dot hide-md"></div>
        <div class="dot hide-md"></div>

        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>


      </div>
      <div class="morse-right">


        <div class="dot hide-lg hide-xl"></div>
        <div class="dot hide-lg  hide-xl"></div>
        <div class="dash hide-lg  hide-xl"></div>
        <div class="dot hide-lg  hide-xl"></div>
        <div class="dot hide-lg  hide-xl"></div>
        <div class="dash hide-lg  hide-xl"></div>
        <div class="dash hide-lg"></div>
        <div class="dash hide-lg"></div>
        <div class="dot hide-lg"></div>
        <div class="dash hide-lg"></div>
        <div class="dash hide-lg"></div>
        <div class="dot hide-lg"></div>
        <div class="dot hide-lg"></div>
        <div class="dot hide-md"></div>
        <div class="dash hide-md"></div>
        <div class="dot hide-md"></div>
        <div class="dash hide-md"></div>
        <div class="dot hide-md"></div>
        <div class="dot hide-md"></div>

        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>
        <div class="slash"></div>

      </div>
      <div class="section-rigth">
        <div class="path cancel-path"></div>
        <div class="path triangle-path"></div>
        <div class="bar-small"></div>
        <div className="path triangle-path" style={{ transform: 'rotateZ(180deg)' }}></div>
        <div class="bar-medium"></div>
        <div class="path cancel-path"></div>
        <div class="bar-medium hide-lg"></div>
        <div class="path circle-path hide-lg"></div>
        <div class="path triangle-path hide-lg" style={{transform: 'rotateZ(180deg)'}}></div>
      </div>
      <div class="section-left">
        <div class="path triangle-path"></div>
        <div class="path circle-path"></div>

        <div class="bar-small"></div>
        <div class="path triangle-path" style={{transform: 'rotateZ(180deg)'}}></div>
        <div class="bar-medium "></div>
        <div class="path triangle-path hide-lg"></div>
        <div class="path cancel-path hide-lg"></div>
        <div class="bar-medium hide-lg"></div>
        <div class="path cancel-path"></div>

      </div>
    </div>
  </div>
  )
}

export default PreLoader