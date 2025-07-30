import React from 'react'

const Awards = () => {
    return (
        <section>
            {/* title */}
            <h2 className='text-lg font-semibold mb-4 text-black dark:text-white'>Training / Certification</h2>

            <div className='w-full flex flex-col gap-3 md:flex-row md:justify-between'>
                {/* Certification card */}
                <div className='w-full md:w-[48%] p-4 flex gap-3 items-center bg-slate-50/30 dark:bg-transparent border border-zinc-100 dark:border-zinc-800 rounded-lg'>

                    {/* organization logo */}
                    <div className='h-10 w-10 text-white font-semibold bg-blue-400 rounded-lg flex justify-center items-center'>
                        IS
                    </div>

                    <div>
                        {/* Certification name */}
                        <h2 className='font-semibold text-[#344054] dark:text-white'>
                            Web Development
                        </h2>

                        {/* organization name */}
                        <h4 className='text-sm text-[#98A1B2] dark:text-zinc-500'>
                            Internshala
                        </h4>

                        {/* Certification date */}
                        <h4 className='text-sm text-[#98A1B2] dark:text-zinc-500'>
                            Apr 2024
                        </h4>
                    </div>

                </div>

                {/* Certification card */}
                <div className='w-full md:w-[48%] p-4 flex gap-3 items-center bg-slate-50/30 dark:bg-transparent border border-zinc-100 dark:border-zinc-800 rounded-lg'>

                    {/* organization logo */}
                    <div className='h-10 w-10 text-white font-semibold bg-blue-400 rounded-lg flex justify-center items-center'>
                        IS
                    </div>

                    <div>
                        {/* Certification name */}
                        <h2 className='font-semibold text-[#344054] dark:text-white'>
                            Ethical Hacking
                        </h2>

                        {/* organization name */}
                        <h4 className='text-sm text-[#98A1B2] dark:text-zinc-500'>
                            Internshala
                        </h4>

                        {/* Certification date */}
                        <h4 className='text-sm text-[#98A1B2] dark:text-zinc-500'>
                            Apr 2024
                        </h4>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Awards