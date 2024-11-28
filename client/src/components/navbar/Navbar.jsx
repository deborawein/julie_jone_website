import React from 'react';
import { motion } from 'framer-motion';
import { Links } from './Links'; // Import the links from your header

export const Navbar = ({ closeNavbar, navbarRef }) => {
  return (
    <motion.div
      ref={navbarRef} // Assign the ref to the navbar
      className="fixed top-0 right-0 w-full h-[70px] bg-black/80 shadow-lg z-50 flex items-center justify-between px-5"
      initial={{ x: '100%' }} // Start off-screen to the right
      animate={{ x: 0 }} // Slide in from the right
      exit={{ x: '100%' }} // Slide back off-screen to the right when closed
      transition={{ duration: 0.5 }}
      onClick={closeNavbar} // Close navbar when clicked inside
    >
      <Links />
    </motion.div>
  );
};
