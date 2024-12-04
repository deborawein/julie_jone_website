import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const items = ['BIO', 'MIXES', 'GIGS', 'CONTACT'];

  return (
    <motion.div className="h-[70px] w-full bg-black bg-opacity-50 flex items-center justify-between px-4">
      {/* Left section (Logo or Brand Name if needed) */}
      <motion.div className="flex flex-row text-white text-lg gap-3">
        <img
          src="/src/assets/julie-white.png"
          alt="JJ Logo"
          className="aspect-square h-[70px] xl:h-[0] object-contain" // Adjust sizes for mobile
        />
        <img
          src="/src/assets/jones-white.png"
          alt="JJ Logo"
          className="aspect-square h-[70px] xl:h-[0] object-contain" // Adjust sizes for mobile
        />
      </motion.div>

      {/* Navigation items */}
      <motion.nav className="flex flex-1 items-center justify-end gap-4 text-sm sm:text-md md:text-lg lg:text-xl xl:gap-20 xl:justify-center">
  {items.map((item) => (
    <motion.a
      whileHover={{ scale: 1.1, color: '#f57925' }}
      whileTap={{ scale: 0.95 }}
      href={`#${item}`}
      key={item}
      className="cursor-pointer text-gray-300 font-light"
    >
      {item}
    </motion.a>
  ))}
</motion.nav>

    </motion.div>
  );
};
