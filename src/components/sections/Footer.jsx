import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Sanjiban Dey</h3>
          <p className="text-sm">Building web solutions with passion and precision.</p>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/sanjibandey2000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sanjiban-dey-2000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sanjibandey2000@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Sanjiban Dey. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
