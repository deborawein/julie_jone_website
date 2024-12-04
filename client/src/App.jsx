import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import { HomeSection } from './components/HomeSection';
import { BioSection } from './components/BioSection';
import { MixesSection } from './components/MixesSection';
import { GigsSection } from './components/GigsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const closeNavbar = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className='bg-black text-gray-300 font-jost h-screen overflow-y-scroll snap-y snap-mandatory'>
      {/* HOME Section */}
      <HomeSection className='' toggleNavbar={toggleNavbar} />

      {/* BIO Section */}
      <BioSection toggleNavbar={toggleNavbar} />

      {/* MIXES Section */}
      <MixesSection toggleNavbar={toggleNavbar} />

      {/* GIGS Section */}
      <GigsSection toggleNavbar={toggleNavbar} />

      {/* CONTACT Section */}
      <ContactSection toggleNavbar={toggleNavbar} />

      <AnimatePresence>
        {menuOpen && <Navbar closeNavbar={closeNavbar} navbarRef={navbarRef} />}
      </AnimatePresence>
    </div>
  );
}
