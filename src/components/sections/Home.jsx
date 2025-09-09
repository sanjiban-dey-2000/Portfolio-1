import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-black text-white relative pt-24 md:pt-20"
    >
      {/* Social Media - Left Fixed (hidden on mobile) */}
      <div className="hidden md:ml-10 md:flex flex-col gap-6 fixed left-4 top-1/2 -translate-y-1/2 z-20">
        <a
          href="https://github.com/sanjiban-dey-2000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-blue-500 transition" />
        </a>
        <a
          href="https://linkedin.com/in/sanjibandey2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
        </a>
        <a
          href="https://x.com/_sanjiban_dey_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="text-2xl hover:text-blue-500 transition" />
        </a>
      </div>

      {/* Left Content */}
      <div className="w-full md:ml-20 md:w-1/2 z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Hi, I'm Sanjiban Dey
        </h1>
        <TypeAnimation
          sequence={[
            "I am a Full Stack Developer",
            2000,
            "",
            "I am a Software Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl text-blue-400 font-medium"
          repeat={Infinity}
        />
        <p className="text-gray-400 mt-6 max-w-md mx-auto md:mx-0">
          Full Stack Developer / Software Developer with a strong Computer Science background, skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Java/Spring Boot. Experienced in RESTful APIs, authentication, databases (MySQL, PostgreSQL, MongoDB), and modern UI frameworks (Tailwind CSS, Bootstrap). Proficient with Git/GitHub, Postman, Maven, Gradle, Vercel, and Netlify, with a focus on delivering clean, scalable, and efficient web applications.
        </p>

        <div className="flex mt-8 justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Photo Section */}
      {/* Right Photo Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <div className="relative mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 animate-pulse blur-lg scale-105"></div>
                <img
                    src="/profile.jpg" // Replace with your image path
                    alt="Profile"
                    className="relative w-56 h-56 md:w-100 md:h-100 object-cover rounded-full border-4 border-blue-500 shadow-xl z-10"
                />
            </div>
        </div>

    </section>
  );
};

export default Home;
