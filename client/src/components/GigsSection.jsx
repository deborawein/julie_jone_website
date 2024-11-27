import React from 'react';
import { MenuButton } from './navbar/MenuButton';
import { EventCard } from './EventCard';

export const GigsSection = ({ toggleNavbar }) => {
  return (
    <section
      id="GIGS"
      className="h-screen snap-center bg-[rgb(18,18,18)] text-gray-300 relative py-16 flex flex-col justify-between items-center" // Use flex-col and justify-end to push content to the bottom
      style={{
        backgroundImage: 'url("/src/assets/jj-play.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        loading: "lazy"
      }}
    >
      {/* Optional: Background overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Menu Button */}
      <MenuButton onClick={toggleNavbar} />

      {/* GIGS Text in Top Right Corner */}
      <div className="absolute top-8 right-[70px] text-3xl font-light text-orange-neon z-10">
        GIGS <span className='text-green-deep'>/</span>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col justify-end text-center md:text-left relative z-20 w-full h-full"> {/* Adjusted flex container to justify content to the bottom */}
        {/* Upcoming Events Header */}
        <h2 className="text-5xl text-white self-center font-bold mb-8 text-left w-full md:w-[70%]">UPCOMING GIGS</h2>

        {/* Event List */}
        <div className="space-y-8 self-center w-full md:w-[70%] mb-10"> {/* Adjusted to have margin-bottom to keep space from bottom */}
          <EventCard date="OCT 10 THU 2024" title="THE MAGIC GARDEN FESTIVAL" />
          <EventCard date="OCT 16 WED 2024" title="ESOTERIC FESTIVAL" />
          <EventCard date="NOV 02 SAT 2024" title="THE MAGIC GARDEN FESTIVAL" />
        </div>
      </div>
    </section>
  );
};
