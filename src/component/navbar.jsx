import React from 'react';
import { navLinks } from '../models/data';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex items-center justify-center h-16">
      {navLinks.map((link) => (
        <div key={link.id}>
          <ul>
            <li className="px-5 font-poppins hover:text-gray-400">
              <Link to={link.path}>{link.name}</Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
