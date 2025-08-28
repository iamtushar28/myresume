import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

const ProjectCard = ({ projectImage, name, description, github, preview, onClick }) => {
    return (
        <>
            {/* project card */}
            <div className='w-full md:w-[48%] h-fit p-3 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-lg flex flex-col gap-1 transition-all duration-300 cursor-pointer group'>

                {/* project image */}
                <div className='w-full h-48 rounded-lg overflow-hidden'>
                    <img src={projectImage} onClick={onClick} alt='project image' className='w-full h-48 border border-zinc-100 dark:border-zinc-700 rounded-lg object-center object-cover' />
                </div>

                <div className='flex justify-between items-end'>
                    <div className='ml-1'>
                        {/* project name */}
                        <h2 className='font-semibold text-black dark:text-white'>{name}</h2>

                        {/* project description */}
                        <p className='text-sm text-[#667085] dark:text-zinc-500'>{description}</p>
                    </div>

                    {/* project links */}
                    <div className='flex gap-1 -mb-1'>
                        <a
                            href={github}
                            target='_blank'
                            className='h-8 w-8 text-black dark:text-white hover:ring-2 hover:ring-blue-400 rounded-full flex justify-center items-center cursor-pointer text-xl transition-all duration-300'
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={preview}
                            target='_blank'
                            className='h-8 w-8 text-black dark:text-white hover:ring-2 hover:ring-blue-400 rounded-full flex justify-center items-center cursor-pointer text-lg transition-all duration-300'
                        >
                            <TbExternalLink />
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectCard