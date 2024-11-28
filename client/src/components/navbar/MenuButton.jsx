import React from 'react';
import { TiThMenuOutline } from 'react-icons/ti';

export const MenuButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[50px] h-[50px] items-center justify-center text-white rounded-full bg-transparent"
  >
    <TiThMenuOutline className="text-[24px] text-orange-neon" />
  </button>
);
