import React from 'react';

const About = () => {
    const techLogos = {
        HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        Javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        TailwindCSS: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
        Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'Express.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
        MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        Mongoose: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', // fallback for mongoose
        PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        MySql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        Github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        Postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    };



  const renderTechItem = (tech) => (
    <div
      key={tech}
      className='flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
    >
      <img src={techLogos[tech]} alt={tech} className='w-5 h-5' />
      <span>{tech}</span>
    </div>
  );

  const frontendSkills = ['HTML5', 'CSS', 'Javascript', 'React', 'TailwindCSS', 'Bootstrap'];
  const backendSkills = ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'PHP', 'MySql'];
  const devopsSkills = ['Git', 'Github', 'Docker'];
  const apiTesting = ['Postman'];

  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
          About Me
        </h2>
        <div className='rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all'>
          <p className='text-gray-300 mb-6'>
            Passionate developer focused on building efficient, user-friendly web applications. Dedicated to continuous learning and delivering clean, scalable solutions.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Frontend</h3>
              <div className='flex flex-wrap gap-2'>
                {frontendSkills.map(renderTechItem)}
              </div>
            </div>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Backend</h3>
              <div className='flex flex-wrap gap-2'>
                {backendSkills.map(renderTechItem)}
              </div>
            </div>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>DevOps</h3>
              <div className='flex flex-wrap gap-2'>
                {devopsSkills.map(renderTechItem)}
              </div>
            </div>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>API Testing</h3>
              <div className='flex flex-wrap gap-2'>
                {apiTesting.map(renderTechItem)}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <h3 className='text-xl font-bold mb-4 text-center'>Education</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li>
                  <strong>BCA</strong> - Vidyasagar University (2019–2022)
                </li>
                <li>
                  Relevant Courseworks: C, C++, Data Structure & Algorithms, Operating System, Computer Network
                </li>
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li>
                  <strong>MCA</strong> - Vidyasagar University (2023–2025)
                </li>
                <li>
                  Relevant Courseworks: Java, Data Structure & Algorithm, Web Development, Machine Learning, Artificial Intelligence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
