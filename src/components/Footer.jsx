import React from 'react'
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {

    const links = [
        {
            Icon: <GrLinkedinOption />,
            link: 'https://www.linkedin.com/in/tushar-suryawanshi-599806299/',
        },
    ]

    return (
        <footer className='flex justify-end items-end mb-4'>

            {/* social links */}
            <div className='flex items-end gap-4'>
                <h4 className='playwrite text-[#98A1B2] dark:text-zinc-500'>—Tushar28</h4>
                {links.map((links, index) => (
                    <a
                        href={links.link}
                        target='_blank'
                        key={index}
                        className='h-10 w-10 text-lg text-zinc-600 dark:text-zinc-500 hover:opacity-65 border border-zinc-200 dark:border-zinc-800 dark:hover:opacity-100 dark:hover:border-zinc-700 rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300'>
                        {links.Icon}
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer