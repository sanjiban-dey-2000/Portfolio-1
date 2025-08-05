import React from "react";

const projects = [
  {
    name: "StockMini",
    description:
      "A full stack smart inventory management system with category, product, supplier tracking",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "Postman",
    ],
    thumbnail: "/stockmini.png", // Place your image in public/images/
    link: "https://github.com/sanjiban-dey-2000/StockMini",
  },
  {
    name: "HealNow",
    description:
      "A mental health wellness full stack web application along with real-time chat application using socket.io, therapist booking and ai chat support features",
    techStack: [
      "Tailwind CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "Multer",
      "MongoDB",
      "Openrouter.ai",
      "Mistral 7B",
      "Socket.io",
      "Razorpay",
      "Git",
      "Postman",
    ],
    thumbnail: "/healnow.png",
    link: "https://github.com/sanjiban-dey-2000/HealNow",
  },
  {
    name: "NeuroSageNet",
    description:
      "Early brain tumor diagnosis using a CNN model and visual confidence outputs.",
    techStack: [
      "Tailwind CSS",
      "EJS",
      "Chart.js",
      "Node.js",
      "Express.js",
      "Multer",
      "Python",
      "Flask",
      "Tensorflow/Keras",
      "Axios",
      "Git",
      "Postman",
    ],
    thumbnail: "/neurosagenet.png",
    link: "https://github.com/sanjiban-dey-2000/NeuroSageNet",
  },
  {
    name: "CineMate",
    description: "A movie recommend React.js website using OMDB api",
    techStack: ["React.js", "Tailwind CSS", "Axios"],
    thumbnail: "/cinemate.png",
    link: "https://github.com/sanjiban-dey-2000/CineMate",
  },
  {
    name: "BlogNest",
    description: "A blog application using server-side scripting",
    techStack: ["EJS", "Node.js", "Express.js", "MongoDB", "Git", "Postman"],
    thumbnail: "/blognest.png",
    link: "https://github.com/sanjiban-dey-2000/BlogNest",
  },
  {
    name: "TandoorTales",
    description:
      "A full stack restaurant web application for seamless user experience",
    techStack: [
      "Tailwind CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "Postman",
    ],
    thumbnail: "/tandoor.png",
    link: "https://github.com/sanjiban-dey-2000/Tandoor-Tales",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 p-5 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 border border-white/10"
            >
              <div className="aspect-video mb-4">
                <img
                  src={project.thumbnail || "/default-thumbnail.png"}
                  alt={project.name}
                  className="rounded-xl w-full h-full object-cover object-center"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 transition-colors mt-2"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
