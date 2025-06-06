import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
        <div className='max-w-5xl mz-auto px-4'>
            <h2 className='text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Featured Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>BlogNest</h3>
                    <p className='text-gray-400 mb-4'>
                        BlogNest is a full-stack web application designed to provide users with a seamless blogging experience. Built with a focus on simplicity and functionality, the platform allows users to create, manage, and share blog posts efficiently.
                    </p>
                    <div className='flex flex-wrap space-x-4 space-y-3'>
                        {
                            ["EJS","Bootstrap","Node.js","Express.js","MongoDB","Git","Postman"].map((tech,key)=>(
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
                    </div>
                </div>

                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>TalkTrek</h3>
                    <p className='text-gray-400 mb-4'>
                        TalkTrek is a MERN stack-based web application designed to connect individuals from around the world for language exchange and cultural learning. The platform enables users to find language partners, chat in real time, and enhance their language proficiency through peer-to-peer interaction.
                    </p>
                    <div className='flex flex-wrap space-x-4 space-y-3'>
                        {
                            ["Tailwind CSS","React.js","Node.js","Express.js","Multer","MongoDB","GetStream ChatApi","Git","Postman"].map((tech,key)=>(
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
                    </div>
                </div>

                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>NeuroSageNet</h3>
                    <p className='text-gray-400 mb-4'>
                        NeuroSageNet is a full-stack web application designed to assist in the early diagnosis of brain tumors using deep learning. The platform allows users to upload MRI scans and receive real-time predictions with visualized confidence scores. It integrates a trained CNN model for classification and presents results through a responsive, user-friendly dashboard.
                    </p>
                    <div className='flex flex-wrap space-x-4 space-y-3'>
                        {
                            ["Tailwind CSS","EJS","Chart.js","Node.js","Express.js","Multer","Python","Flask","Tensorflow/Keras","Axios","Git","Postman"].map((tech,key)=>(
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
                    </div>
                </div>

                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>ShopSphere</h3>
                    <p className='text-gray-400 mb-4'>
                        ShopSphere is a modern, full-featured e-commerce platform designed to deliver a seamless shopping experience. From product discovery to secure checkout, the platform supports users with a responsive UI, real-time inventory management, and admin control features. It’s built with scalability and performance in mind for both customers and store owners.
                    </p>
                    <div className='flex flex-wrap space-x-4 space-y-3'>
                        {
                            ["React.js","Tailwind CSS","Axios","Node.js","Express.js","MongoDB","JWT","Bcryptjs","Razorpay","Nodemailer","Git","Postman"].map((tech,key)=>(
                                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Projects