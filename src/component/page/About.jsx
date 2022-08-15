import React from 'react';

function About() {
  const about = [
    {
      id: 1,
      title: 'About Me',
      text: 'I am a full stack web developer with a passion for creating beautiful, responsive websites and applications. I have a background in computer science and a passion for learning new technologies. I am currently looking for a position in the web development industry.',
    },
    {
      id: 2,
      title: 'About Me',
      text: 'I am a full stack web developer with a passion for creating beautiful, responsive websites and applications. I have a background in computer science and a passion for learning new technologies. I am currently looking for a position in the web development industry.',
      className: 'bg-blue-200 ',
    },
    {
      id: 3,
      title: 'Skills',
      text: 'HTML, CSS, JavaScript, React, Node, Express, MongoDB, MySQL, Git, GitHub, and more!',
    },
  ];
  return (
    <div id="about" className="relative h-screen mt-[50px]">
      <h3 className="absolute top-0 left-0 right-0 text-center text-[3rem] pt-10 font-bold z-[999]">
        Who I am in the tech industry
      </h3>
      <div className="flex flex-row justify-center items-center gap-10">
        {about.map((item) => (
          <div
            key={item.id}
            className={`relative h-96 w-80 bg-white p-10 mt-[10%] shadow-lg card-anime mt-64 `}
          >
            <h1 className="text-3xl text-center font-semibold">{item.title}</h1>
            <p className="text-left pt-10">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
