import React, { useEffect, useState } from 'react';
import './nav.css';
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 0;
  //     if (isScrolled !== scrolled) {
  //       setScrolled(isScrolled);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolled]);

  return (
    // <nav className={scrolled ? 'scrolled' : ''}>
    <nav className={'nav'}>
      <a href="#header" className="active">
        Abdul Mannan
      </a>
    </nav>
  );
};

export default Nav;