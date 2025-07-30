import React from 'react'

const About = () => {
    return (
        <>

            {/* hero title */}
            <h1 className='text-3xl font-semibold pt-6 text-black dark:text-white'>
                I will turn your vision into a real digital product.
                <span className='text-[#98A1B2] dark:text-zinc-600'> I’m open to collaboration.</span>
            </h1>

            {/* about me */}
            <div className='flex flex-col gap-4 text-justify'>
                <p className='text-sm text-[#667085] dark:text-zinc-500'>
                    I'm a passionate Front-end Developer with a strong focus on creating clean, high-performance web experiences. Front-end is where my skills shine—especially in translating Figma designs into fully responsive, functional websites with precision and attention to detail. I enjoy bringing UI/UX concepts to life through intuitive and engaging interfaces.
                </p>

                <p className='text-sm text-[#667085] dark:text-zinc-500'>
                    React and Next.js are my favorite tools and the core of most of my work. I rely on them to build fast, scalable, and modern applications, leveraging features like server-side rendering and component-based architecture. I'm eager to join a forward-thinking team where I can continue building impactful digital products and push the limits of great front-end development
                </p>
            </div>

        </>
    )
}

export default About