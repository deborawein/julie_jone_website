import React from 'react';
import { motion } from 'framer-motion';

export const Links = () => {
  const items = ['HOME', 'BIO', 'MIXES', 'GIGS', 'CONTACT'];

  return (
    <motion.div className="w-full flex flex-row items-center justify-center gap-10 sm:gap-20 text-xl font-light text-green-deep">
      {items.map((item) => (
        <motion.a
          whileHover={{ fontWeight: 300, scale: 1.2, color: '#f57925' }}
          whileTap={{ scale: 1 }}
          href={`#${item}`}
          key={item}
          className="cursor-pointer"
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};
