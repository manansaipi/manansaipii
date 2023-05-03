import React from 'react'
// import CV from '../../assets/cv.pdf'

const CTA = () => {
  const myStyle = {
  color: 'black',
  fontSize: '16px',
};
  return (
    <div className='cta'>
        <a href="{CV} download" className='btn'>Download CV</a>
        
        <a href="#about" className='btn btn-primary'><div className="div" style={{ color: '#464c54' }} >Let's Talk</div></a> {/* later change to #contact the href */}
    </div>
  )
}

export default CTA