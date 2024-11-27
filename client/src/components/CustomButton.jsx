import React from 'react'
import { BsChevronCompactRight } from 'react-icons/bs';

export const CustomButton = ({title}) => {
    return (
        <button className='mt-6 w-full flex items-center justify-center px-5 py-1 text-white text-2xl  bg-green-deep rounded-xl hover:bg-[#105e4b] transition-all duration-300 font-extralight'>
            {title}
            <BsChevronCompactRight className='text-6xl -ml-4 text-[#1b9f89]' />
            <BsChevronCompactRight className='text-6xl -ml-10 text-[#47d0b9]' />
            <BsChevronCompactRight className='text-6xl -ml-10 -mr-6 text-[#a4fff0]' />
        </button>
    )
}
