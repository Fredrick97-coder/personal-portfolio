import React from 'react';
import { navLinks } from '../models/data';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[999] bg-nav flex items-center justify-center h-16   shadow-lg "
      id=""
    >
      {navLinks.map((link) => (
        <div key={link.id}>
          <ul>
            <li className="px-5 font-poppins hover:text-gray-400">
              <HashLink id="link" smooth to={`${link.path}`}>
                {link.name}
              </HashLink>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
