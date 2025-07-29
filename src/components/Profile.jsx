import React from 'react'
import { IoCopyOutline } from "react-icons/io5";
import MyImage from "../../public/tushar28.png"

const Profile = () => {
    return (
        <section className='flex justify-between items-center'>

            <div className='flex gap-3 items-center'>
                {/* profile image */}
                <div className='h-12 w-12 rounded-full'>
                    <img src={MyImage} alt='Tushar`s image' className='h-12 w-12 rounded-full' />
                </div>

                <div>
                    {/* name */}
                    <h2 className='text-black font-semibold'>Tushar Suryawanshi</h2>
                    {/* work */}
                    <h4 className='text-[#98A1B2] text-sm'>Frontend Developer</h4>
                </div>
            </div>

            {/* button for copy email */}
            <button className='py-2 w-[90px] h-fit text-zinc-600 text-sm font-semibold border border-zinc-200 bg-white/60 rounded-lg flex justify-center items-center gap-2 cursor-pointer'>
                <IoCopyOutline className='text-lg' />
                E-mail
            </button>

        </section>
    )
}

export default Profile