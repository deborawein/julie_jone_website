import React from 'react';
import { TiThMenuOutline } from 'react-icons/ti';

export const MenuButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className='absolute top-5 right-5 z-50 w-[60px] h-[60px]  text-white rounded-full flex items-center justify-center'
  >
    <TiThMenuOutline className='text-[24px] text-orange-neon'/>
  </button>
);
