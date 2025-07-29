// SkillButton.jsx
import React from 'react';

const SkillButton = ({ Icon, iconColor, name, description }) => {
    return (
        <button className='p-2 flex items-center gap-3 max-w-full md:w-[45%] hover:bg-slate-100 rounded-lg cursor-pointer transition-all duration-300'>

            {/* icon container */}
            <div className='h-10 w-10 bg-white rounded-lg border border-zinc-200 flex justify-center items-center'>
                <Icon className={`text-2xl ${iconColor}`} />
            </div>

            {/* skill text */}
            <div className='flex flex-col items-start'>
                <h4 className='font-semibold text-[#1D2939]'>{name}</h4>
                <p className='text-sm text-[#667085]'>{description}</p>
            </div>

        </button>
    );
};

export default SkillButton;
