import React from 'react';
import './portofolio.css'
import IMG1 from '../../assets/all-ticket.png'
import IMG2 from '../../assets/admin-dashboard.png'
const portofolio = () => {

  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="container portofolio__container">
        <article className='portofolio__item'>
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Ticketing Web Application</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/manansaipi/FinalPDT#ticketing-web-application" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.youtube.com/watch?v=X61UqD_2ywQ&ab_channel=AbdulMannanSaipi" className='btn btn-primary' target="_blank" rel="noreferrer">Demo</a>
          </div>
        </article>
        <article className='portofolio__item'>
          <div className="portofolio__item-image">
            <img src="https://img.youtube.com/vi/hubttbMuBt0/0.jpg" alt="" />
          </div>
          <h3>To-do list Mobile Application</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/manansaipi/final_wpm#to-do-list-mobile-application" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://drive.google.com/file/d/1s6V5Nzl7FXEbAWJ9MVQ39xdk62G8iuud/view" className='btn btn-primary' target="_blank" rel="noreferrer">Demo</a>
          </div>
        </article>
        <article className='portofolio__item'>
          <div className="portofolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Ticketing Web Application (Laravel)</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com/manansaipi/finalssip#ticketing-web-application" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://drive.google.com/file/d/10F2BOJLSttfLvppUDpBly4JWbE_nY4pA/view" className='btn btn-primary' target="_blank" rel="noreferrer">Demo</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default portofolio




