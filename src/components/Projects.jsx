// Projects.jsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { RxCross1 } from "react-icons/rx";

const Projects = () => {
    // ... (rest of your state and projects array)

    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            projectImage: '/dev.webp',
            name: 'Dev',
            description: 'AI Powered Blog Webapp',
            github: 'https://github.com/iamtushar28/dev',
            preview: 'https://dev-iota-one.vercel.app/',
        },
        {
            projectImage: '/elvia.webp',
            name: 'Elvia',
            description: 'Multiplayer quiz platform',
            github: 'https://github.com/iamtushar28/elvia',
            preview: 'https://elvia-ai.vercel.app/',
        },
    ];

    const handleCloseModal = () => {
        setActiveProject(null);
    };

    return (
        <section>
            {/* title */}
            <h2 className='text-lg font-semibold mb-4 text-black dark:text-white'>Selected Work</h2>

            <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between flex-wrap'>
                {/* project card */}
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectImage={project.projectImage}
                        name={project.name}
                        description={project.description}
                        github={project.github}
                        preview={project.preview}
                        // Pass the onClick handler as a prop
                        onClick={() => setActiveProject(project)}
                    />
                ))}
            </div>

            {/* showing project full image modal */}
            {activeProject && (
                <div className='h-screen w-full px-2 bg-black/50 dark:bg-black/70 fixed top-0 bottom-0 right-0 left-0 flex flex-col lg:flex-row justify-center items-center z-50'>
                    <img
                        src={activeProject.projectImage}
                        alt={activeProject.name}
                        className='w-full h-auto lg:w-[45%] lg:h-[80%] rounded-2xl'
                    />

                    <button
                        onClick={handleCloseModal}
                        className='p-2 mt-14 lg:mt-0 text-3xl text-white hover:bg-white/20 lg:absolute lg:top-12 lg:right-72 cursor-pointer rounded-full transition-all duration-200'
                    >
                        <RxCross1 />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;