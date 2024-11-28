import React from 'react';
import { BsChevronCompactRight } from 'react-icons/bs';

export const CustomButton = ({ title, type, onClick }) => {
  return (
    <button
      className="mt-6 w-full flex items-center justify-center px-5 py-1 text-white text-2xl font-extralight rounded-xl bg-green-deep hover:bg-[#105e4b] transition-all duration-300"
      type={type}
      onClick={onClick} // Pass the click handler
    >
      {title}
      <BsChevronCompactRight className="text-6xl -ml-4 text-[#1ca174]" />
      <BsChevronCompactRight className="text-6xl -ml-10 text-[#21c38c]" />
      <BsChevronCompactRight className="text-6xl -ml-10 -mr-6 text-[#30dca2]" />
    </button>
  );
};
