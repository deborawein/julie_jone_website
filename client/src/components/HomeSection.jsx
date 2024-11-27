import React from 'react';
import { Header } from './header/Header';

export const HomeSection = () => {
  return (
    <section
      id="HOME"
      className="h-screen snap-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/src/assets/jj-home.jpg')" }} // Path to your background image
    >
      <Header />

      {/* Left 50% container with centered logo */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center w-1/2">
        <img
          src="/src/assets/jj-logo-white.png" // Ensure this path is correct
          alt="JJ Logo"
          className="w-[350px] h-[350px] object-contain" // Logo size and aspect ratio
        />
      </div>
    </section>
  );
};
