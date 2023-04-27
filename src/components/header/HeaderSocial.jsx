import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'



const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/abdulmannansaipi/"  target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/manansaipi" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/manansaipi/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial