import React from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';

function Hero() {
  return (
    <div className=" relative flex justify-center items-center mt-[4rem] mx-5 gap-40 overflow-x-hidden">
      {/* left side */}
      <div>
        <span className="text-2xl py-16 text-[#AC909E]">
          Hi <span className="text-black">I'm</span>
        </span>{' '}
        <h1 className="text-5xl font-poppins mb-6 text-[#AC909E]">
          Fredrick Mensah Otabil
        </h1>
        <p className="mb-4 text-black">
          A Frontend Developer • Backend Developer • Graphic Designer • UI/UX
          Designer
        </p>
        <div
          className="flex justify-between items-center bg-[#FF642B] h-16 w-44 rounded-full cursor-pointer"
          id="hero-btn"
        >
          <span className="pl-3">Get to know me</span>
          <span className="h-[100%] w-10 bg-slate-500 rounded-tr-full rounded-br-full flex justify-center items-center">
            <HiArrowNarrowDown id="hero-arrow-icon" size={30} color="white" />
          </span>
        </div>
      </div>
      {/* right side */}
      <div>
        <div className="img-bg" />
        <img
          src={require('../assets/IMG_0098.png')}
          alt=""
          className="h-[38rem] w-full "
        />
        <span id="img-overlay" />
      </div>
    </div>
  );
}

export default Hero;
