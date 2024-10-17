import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {FaHashnode} from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between mt-4 p-2">
      {/* Logo */}
      <div className="flex items-center">
        <img src="./airdrop.png" alt="Logo" className="h-10" />
        <span className="ml-2 text-xl font-bold">Solana Airdrop</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://hashnode.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaHashnode size={24} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
