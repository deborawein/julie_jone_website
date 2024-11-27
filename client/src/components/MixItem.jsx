import React from 'react'
import { FiPlayCircle } from 'react-icons/fi'; // Play icon for the mixes
import { BsMusicNote } from 'react-icons/bs'; // Music note icon for the mixes

export const MixItem = ({ title }) => {
  return (
    <div className="flex justify-between items-center bg-green-deep/80 text-white py-4 px-6 rounded-xl shadow-2xl">
      <div className="flex space-x-4">
        <FiPlayCircle className="mr-3 text-2xl text-orange-neon" />
        <span>{title}</span>
        <BsMusicNote className="ml-3 text-xl text-orange-neon" />
      </div>
    </div>
  );
}
