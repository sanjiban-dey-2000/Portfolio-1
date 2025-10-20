import React from 'react';

const techLogos = {
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  Javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',

  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  TailwindCSS: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',

  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
  'Spring Boot': 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
  'Spring Data JPA': 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
  Hibernate: 'https://hibernate.org/images/hibernate-logo.svg',
  'Spring Security': 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',

  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',

  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GGit: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  Github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  VSCode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'IntelliJ IDEA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
  Maven: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
  Gradle: 'https://gradle.org/images/gradle-knowledge-graph-logo.png',
  Vercel: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg',
  Netlify: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg',

  Postman: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  'RESTful APIs': 'https://cdn-icons-png.flaticon.com/512/2965/2965358.png',
  DSA: 'https://cdn-icons-png.flaticon.com/512/2721/2721292.png',
  'Machine Learning': 'https://cdn-icons-png.flaticon.com/512/1048/1048947.png',

  // Education logos
  Education: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
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

const About = () => {
  const programmingLanguages = ['Java', 'Javascript', 'C', 'C++'];
  const frontendSkills = ['HTML5', 'CSS', 'TailwindCSS', 'Bootstrap', 'React'];
  const backendSkills = ['Node.js', 'Express.js', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'Spring Security'];
  const databases = ['MySQL', 'MongoDB', 'PostgreSQL'];
  const toolsAndPlatforms = ['Git', 'Github','Jenkins', 'VSCode', 'IntelliJ IDEA', 'Maven', 'Gradle', 'Vercel', 'Netlify'];
  const otherSkills = ['Postman', 'RESTful APIs', 'DSA', 'Machine Learning'];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institute: 'Vidyasagar University',
      year: '2025',
      cgpa: '9.05',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institute: 'Kharagpur College',
      year: '2022',
      cgpa: '7.8',
    },
  ];

  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20 bg-black text-white'>
      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-3xl text-center font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
          About Me
        </h2>

        <div className='rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all'>
          <p className='text-gray-300 mb-6'>
            Passionate developer focused on building efficient, user-friendly web applications. Dedicated to continuous learning and delivering clean, scalable solutions.
          </p>

          {/* Education Section */}
          <div className='rounded-xl p-6 hover:-translate-y-1 transition-all mb-8'>
            <h3 className='text-xl font-bold mb-4'>Education</h3>
            <div className='space-y-4'>
              {education.map((edu, index) => (
                <div key={index} className='flex items-start gap-3 bg-blue-500/10 p-3 rounded-lg hover:bg-blue-500/20 transition'>
                  <img src={techLogos.Education} alt="Education" className='w-8 h-8 mt-1' />
                  <div>
                    <p className='font-semibold text-white'>{edu.degree}</p>
                    <p className='text-gray-300 text-sm'>{edu.institute} • {edu.year}</p>
                    <p className='text-gray-400 text-sm'>CGPA: {edu.cgpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Programming Languages</h3>
              <div className='flex flex-wrap gap-2'>
                {programmingLanguages.map(renderTechItem)}
              </div>
            </div>

            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Frontend Development</h3>
              <div className='flex flex-wrap gap-2'>
                {frontendSkills.map(renderTechItem)}
              </div>
            </div>

            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Backend Development</h3>
              <div className='flex flex-wrap gap-2'>
                {backendSkills.map(renderTechItem)}
              </div>
            </div>

            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Databases</h3>
              <div className='flex flex-wrap gap-2'>
                {databases.map(renderTechItem)}
              </div>
            </div>

            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Tools & Platforms</h3>
              <div className='flex flex-wrap gap-2'>
                {toolsAndPlatforms.map(renderTechItem)}
              </div>
            </div>

            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Other Skills</h3>
              <div className='flex flex-wrap gap-2'>
                {otherSkills.map(renderTechItem)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
