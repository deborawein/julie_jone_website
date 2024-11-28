import React from 'react';
import { Header } from './header/Header';

export const HomeSection = () => {
  return (
    <section
      id="HOME"
      className="h-full w-full snap-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/src/assets/jj-home.jpg')" }} // Path to your background image
    >
        <Header />
        {/* Left 50% container with centered logo */}
        <div className="absolute left-0 top-[75%] transform -translate-y-1/2 flex justify-center items-center w-full md:w-1/2 md:top-1/2 ">
          <img
            src="/src/assets/jj-logo-white.png"
            alt="JJ Logo"
            className="aspect-square h-[0px] xl:h-[350px] object-contain" // Adjust sizes for mobile
          />
        </div>
    </section>
  );
};
 