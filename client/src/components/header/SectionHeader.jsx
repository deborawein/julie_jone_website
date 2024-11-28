import React from 'react';
import { motion } from 'framer-motion';
import { MenuButton } from '../navbar/MenuButton';

export const SectionHeader = ({ toggleNavbar, title }) => {
  return (
    <motion.div className="h-[70px] w-full bg-black/10 bg-opacity-50 px-4 flex items-center justify-end space-x-2">
      {/* Title */}
      <div className="text-3xl font-light text-orange-neon ">
        {title}<span className="text-green-deep pl-2">/</span>
      </div>

      {/* Menu Button */}
      <MenuButton onClick={toggleNavbar} />
    </motion.div>
  );
};
