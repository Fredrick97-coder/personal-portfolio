import React from 'react';
import { navLinks } from '../models/data';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <div className="flex items-center justify-center h-16">
      {navLinks.map((link) => (
        <div key={link.id}>
          <ul>
            <li className="px-5 font-poppins hover:text-gray-400">
              <HashLink smooth to={`${link.path}`}>
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
