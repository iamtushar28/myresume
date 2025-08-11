import React from 'react'
import { FaGithub } from "react-icons/fa";


const Profile = () => {
    return (
        <section className='flex justify-between items-center'>

            <div className='flex gap-3 items-center'>
                {/* profile image */}
                <div className='h-12 w-12 rounded-full'>
                    <img src='/tushar28.webp' alt='Tushar`s image' className='h-12 w-12 rounded-full' />
                </div>

                <div>
                    {/* name */}
                    <h2 className='text-black dark:text-white font-semibold'>Tushar Suryawanshi</h2>
                    {/* work */}
                    <h4 className='text-[#98A1B2] dark:text-[#6B6B6B] text-sm'>Frontend Engineer</h4>
                </div>
            </div>

            {/* button for github link */}
            <a
                href='https://github.com/iamtushar28/'
                target='_blank'
                className='py-2 w-[90px] h-fit text-zinc-600 dark:text-[#6B6B6B] text-sm font-semibold border border-zinc-200 dark:border-zinc-800 hover:bg-slate-100/60 dark:hover:bg-zinc-800 rounded-lg flex justify-center items-center gap-2 cursor-pointer transition-all duration-300'>
                <FaGithub className='text-lg text-black dark:text-white'
                />
                Github
            </a>

        </section>
    )
}

export default Profile