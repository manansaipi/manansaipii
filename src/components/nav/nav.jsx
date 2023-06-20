import React, { useEffect, useState } from 'react';
import './nav.css';
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#header" className="active">
        Home
      </a>
      <a href="#about">
        About
      </a>
      <a href="#experience">
        Experience
      </a>
    </nav>
  );
};

export default Nav;