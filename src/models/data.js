import { IoLogoGithub } from 'react-icons/io';
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti';
import { SiGitbook } from 'react-icons/si';
import { ImMail4 } from 'react-icons/im';

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    path: '#',
  },
  {
    id: 2,
    name: 'About',
    path: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    path: '#projects',
  },
];

export const sideLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/fredrick-otabil-6106371aa/',
    icon: <TiSocialLinkedinCircular size={30} />,
    style: 'bg-blue-500 hover:bg-blue-700 z-10',
  },
  {
    id: 2,
    name: 'Github',
    to: 'https://github.com/Fredrick97-coder',
    icon: <IoLogoGithub size={30} />,
    style: 'bg-gray-500 hover:bg-gray-700 z-10',
  },
  {
    id: 3,
    name: 'Twitter',
    to: 'https://twitter.com/ClarkCoder',
    icon: <TiSocialTwitterCircular size={30} />,
    style: 'bg-blue-500 hover:bg-blue-700 z-10',
  },
  {
    id: 4,
    name: 'Gmail',
    to: 'mailto:fredrickotabil97@gmail.com',
    icon: <ImMail4 size={30} stroke="white" />,
    style: 'bg-red-500 hover:bg-red-700 z-10',
  },
  {
    id: 5,
    name: 'Resume',
    to: '/resume.pdf',
    icon: <SiGitbook size={30} />,
    download: true,
    style: 'bg-gray-500 hover:bg-gray-700 z-10',
  },
];
