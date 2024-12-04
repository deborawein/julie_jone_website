import React, { useEffect } from 'react';
import { Header } from './header/Header';

export const HomeSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxLogo = document.querySelector('.parallax-logo');
      if (parallaxLogo) {
        parallaxLogo.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="HOME"
      className="h-screen w-full snap-start bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/images/jj-home.jpg')" }}
    >
      <Header />
      {/* Left 50% container with centered logo */}
      <div
        className="absolute w-1/2 left-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center"
      >
        <img
          src="public/images/jj-logo-white.png"
          alt="JJ Logo"
          className="aspect-square h-0 xl:h-[350px] object-contain"
        />
      </div>
    </section>
  );
};
