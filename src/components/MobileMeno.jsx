import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const MobileMeno = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen?"h-screen opacity-100 pointer-events-auto":"h-0 opacity-0 pointer-events-none"}`}>
        <button onClick={()=>setMenuOpen(false)} className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer' aria-label='Close Menu'>
            &times;
        </button>

        <a href="#home" onClick={()=>setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?"opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>Home</a>
        <a href="#about" onClick={()=>setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?"opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>About</a>
        <a href="#projects" onClick={()=>setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?"opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>Projects</a>
        <a href="#contact" onClick={()=>setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?"opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>Contact</a>

        <div className='flex justify-center items-center space-x-6 my-4'>
           <a onClick={()=>setMenuOpen(false)}
            href="https://github.com/sanjiban-dey-2000/"
            target="_blank"
            rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-blue-500 transition" />
            </a>
            <a onClick={()=>setMenuOpen(false)}
             href="https://linkedin.com/in/sanjibandey2000"
             target="_blank"
             rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
            </a>
            <a onClick={()=>setMenuOpen(false)}
             href="https://x.com/_sanjiban_dey_"
             target="_blank"
             rel="noopener noreferrer">
              <FaXTwitter className="text-2xl hover:text-blue-500 transition" />
            </a>
        </div>
    </div>
  )
}

export default MobileMeno