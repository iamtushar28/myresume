import React from 'react'
import SkillButton from './SkillButton';
import { FaReact, FaJsSquare, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiGraphql, SiRedux } from "react-icons/si";

const TechStack = () => {
    return (
        <>

            <h2 className='text-lg font-semibold'>Stack</h2>

            <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between flex-wrap'>

                <SkillButton
                    Icon={FaJsSquare}
                    iconColor='text-yellow-300'
                    name='JavaScript'
                    description='Programming Language'
                />

                <SkillButton
                    Icon={FaReact}
                    iconColor='text-sky-400'
                    name='React.js'
                    description='Frontend Library'
                />

                <SkillButton
                    Icon={RiNextjsFill}
                    iconColor='text-black'
                    name='Next.js'
                    description='Full-stack Framework'
                />

                <SkillButton
                    Icon={SiRedux}
                    iconColor='text-purple-500'
                    name='Redux.js'
                    description='State Management'
                />

                <SkillButton
                    Icon={RiTailwindCssFill}
                    iconColor='text-sky-400'
                    name='Tailwind CSS'
                    description='CSS Framework'
                />

                <SkillButton
                    Icon={SiMongodb}
                    iconColor='text-green-500'
                    name='MongoDB'
                    description='No SQL DB'
                />

                <SkillButton
                    Icon={SiGraphql}
                    iconColor='text-pink-500'
                    name='GraphQL'
                    description='Query tool'
                />

                <SkillButton
                    Icon={FaGithub}
                    iconColor='text-black'
                    name='Github'
                    description='Version Control'
                />

            </div>

        </>
    )
}

export default TechStack