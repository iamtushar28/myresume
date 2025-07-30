import React from 'react'

const Education = () => {

    const education = [
        {
            year: "2022-2026",
            degree: "🧑‍🎓BTECH Computer Science & Engineering",
            college: "Arvind Gavali College of Engineering, Satara.",
            description: "I've gained comprehensive knowledge in software development, focusing on innovative solutions, technical expertise, and project management, with skills enhanced through real-world projects and challenges."
        },
        {
            year: "2020-2022",
            degree: "📚Senior Secondary (XII), HSC (Science)",
            college: "Balasaheb Desai College, Patan.",
            description: "Completed HSC (XII) in Science, gaining comprehensive knowledge in Physics, Chemistry, and Biology, with a focus on analytical thinking, problem-solving, laying a strong foundation for future academic and professional pursuits."
        },
    ]

    return (
        <section>
            {/* title */}
            <h2 className='text-lg font-semibold mb-4 text-black dark:text-white'>Education</h2>

            <div className='flex flex-col gap-4'>
                {/* Education card */}
                {education.map((education, index) => (
                    <div
                        key={index}
                        className='w-full h-fit p-4 bg-slate-50/30 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg'
                    >

                        {/* year */}
                        <h4 className='text-sm text-[#98A1B2] dark:text-zinc-400'>{education.year}</h4>

                        {/* Education */}
                        <h2 className='font-semibold text-[#344054] dark:text-white mt-1'>{education.degree}</h2>

                        {/* college */}
                        <h4 className='text-sm text-[#98A1B2] dark:text-zinc-400'>{education.college}</h4>

                        {/* description */}
                        <p className='text-[#667085] dark:text-zinc-500 text-sm mt-1'>
                            {education.description}
                        </p>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education