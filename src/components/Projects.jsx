import React from 'react'
import ProjectCard from './ProjectCard';
import Dev from '/dev.png'
import Travelo from '/travelo.png'

const Projects = () => {

    const projects = [
        {
            projectImage: Dev,
            name: 'Dev',
            description: 'AI Powered Blog Webapp',
            github: 'https://github.com/iamtushar28/dev',
            preview: 'https://dev-iota-one.vercel.app/',
        },
        {
            projectImage: Travelo,
            name: 'Travelo',
            description: 'Modern Travel Website',
            github: 'https://github.com/iamtushar28/travelo',
            preview: 'https://travelo28.vercel.app/',
        },
    ]

    return (
        <section>

            {/* title */}
            <h2 className='text-lg font-semibold mb-4 text-black dark:text-white'>Selected Work</h2>

            <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between flex-wrap'>
                {/* project card */}
                {projects.map((projects, index) => (
                    <ProjectCard
                    key={index}
                    projectImage={projects.projectImage}
                    name={projects.name}
                    description={projects.description}
                    github={projects.github}
                    preview={projects.preview}
                    />
                ))}
            </div>

        </section>
    )
}

export default Projects