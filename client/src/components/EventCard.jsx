import React from 'react';
import { BsChevronCompactRight } from 'react-icons/bs';

export const EventCard = ({ date, title, local, infoUrl, ticketUrl }) => {
  return (
    <div className="flex justify-between items-center bg-green-deep/80 text-white py-4 px-6 rounded-xl shadow-2xl">
      {/* Left Content */}
      <div className="w-[50%] text-left">
        <div className="text-lg font-light">{date}</div>
        <div className="text-xl font-bold">{title}</div>
      </div>

      {/* Center Content */}
      <div className="w-[30%] flex items-center justify-center text-center">
        <div className="text-xl font-light">@ {local}</div>
      </div>

      {/* Right Content (Button) */}
      <div className="w-[20%] flex items-center justify-end">
        <a
          href={ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full  justify-center items-center gap-2 px-4 py-2 text-white text-2xl font-extralight rounded-xl bg-orange-neon hover:bg-[#e06b00] transition-all"
        >
          TICKETS
          <BsChevronCompactRight className="text-2xl -ml-3 text-[#f7904b]" />
          <BsChevronCompactRight className="text-2xl -ml-6 text-[#f8a770]" />
          <BsChevronCompactRight className="text-2xl -ml-6 text-[#fabe96]" />
        </a>
      </div>
    </div>
  );
};
