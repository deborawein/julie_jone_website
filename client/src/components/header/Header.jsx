import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const items = ['BIO', 'MIXES', 'GIGS', 'CONTACT'];

  return (
    <motion.div className="h-[100px] bg-black bg-opacity-50 flex justify-around">
      <motion.div className="flex flex-1 items-center justify-center gap-[100px] text-[30px] font-light">
        {items.map((item) => (
          <motion.a
            whileHover={{ fontWeight: 300, scale: 1.2, color: '#FFF' }}
            whileTap={{ scale: 1 }}
            href={`#${item}`}
            key={item}
            className="cursor-pointer"
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};
