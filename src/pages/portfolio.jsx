import React from 'react';
import Hero from '../component/hero';
import Navbar from '../component/navbar';
import About from '../component/page/About';
import Projects from '../component/page/Projects';
import SideLinks from '../component/sideLinks';

function Portfolio() {
  return (
    <div className="h-full">
      <div className="h-screen" id="hero">
        <Navbar />
        <SideLinks />
        <Hero />
      </div>
      <About />
      <Projects />
    </div>
  );
}

export default Portfolio;
