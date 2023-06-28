import React, { useEffect } from 'react'
import { preLoaderAnim } from '../utils/anim'
import './preloader.css'

const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim()
    },[])

  return (
    <div className='preloader'>
        <div className="texts-container">
            <span></span>
                <span><h1>Welcome.</h1></span>
            <span></span>
        </div>
    </div>
  )
}

export default PreLoader