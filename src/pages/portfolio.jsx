import React from 'react';
import Hero from '../component/hero';
import Navbar from '../component/navbar';
import About from '../component/page/About';
import Projects from '../component/page/Projects';
import SideLinks from '../component/sideLinks';
import Footer from '../component/footer';

function Portfolio() {
  return (
    <div>
      <div className="h-screen" id="hero">
        <Navbar />
        <SideLinks />
        <Hero />
      </div>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Portfolio;
