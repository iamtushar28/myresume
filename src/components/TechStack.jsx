import React from 'react'
import SkillButton from './SkillButton';
import { FaReact, FaJsSquare, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiGraphql, SiRedux } from "react-icons/si";

const TechStack = () => {

    const skills = [
        {
            Icon: FaJsSquare,
            iconColor: 'text-yellow-300',
            name: 'JavaScript',
            description: 'Programming Language',
        },
        {
            Icon: FaReact,
            iconColor: 'text-sky-400',
            name: 'React.js',
            description: 'Frontend Library',
        },
        {
            Icon: RiNextjsFill,
            iconColor: 'text-black dark:text-white',
            name: 'Next.js',
            description: 'Full-stack Framework',
        },
        {
            Icon: SiRedux,
            iconColor: 'text-purple-500',
            name: 'Redux.js',
            description: 'State Management',
        },
        {
            Icon: RiTailwindCssFill,
            iconColor: 'text-sky-400',
            name: 'Tailwind CSS',
            description: 'CSS Framework',
        },
        {
            Icon: SiMongodb,
            iconColor: 'text-green-500',
            name: 'MongoDB',
            description: 'NoSQL DB',
        },
        {
            Icon: SiGraphql,
            iconColor: 'text-pink-500',
            name: 'GraphQL',
            description: 'Query Language',
        },
        {
            Icon: FaGithub,
            iconColor: 'text-black dark:text-white',
            name: 'Github',
            description: 'Version Control',
        },
    ];


    return (
        <section>

            <h2 className='text-lg font-semibold mb-4 text-black dark:text-white'>Stack</h2>

            <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between flex-wrap'>

                {skills.map((skill, index) => (
                    <SkillButton
                        key={index}
                        Icon={skill.Icon}
                        iconColor={skill.iconColor}
                        name={skill.name}
                        description={skill.description}
                    />
                ))}

                {/* <div className='w-full flex justify-center'>
                    <button className='py-2 w-[90px] h-fit text-zinc-600 text-xs font-semibold border border-zinc-200 bg-white/60 hover:bg-zinc-50 rounded-lg flex justify-center items-center gap-2 cursor-pointer'>
                        Load more..
                    </button>
                </div> */}

            </div>

        </section>
    )
}

export default TechStack