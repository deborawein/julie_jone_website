import React from 'react';
import { SectionHeader } from './header/SectionHeader';

export const MixesSection = ({ toggleNavbar }) => {
  return (
    <section
      id="MIXES"
      className="h-screen snap-center bg-[#ecd8b6] text-gray-300 relative flex flex-col justify-center items-center"
    >
      {/* Section Header */}
      <div className="flex-1 z-30 w-full">
        <SectionHeader toggleNavbar={toggleNavbar} title="MIXES" />
      </div>

      {/* Video Background */}
      <video
        src="/src/assets/jj-video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        loading="lazy"
      />

      {/* Optional: Background overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Main Content */}
      <div
        className="p-6 flex flex-col md:flex-row md:text-left z-20 gap-4 relative rounded-xl"
      >
        {/* Background Image Container */}
        <div
          className="absolute inset-0 rounded-l-full"
          style={{
            backgroundImage: 'url("/src/assets/profile-square-bg.jpg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            opacity: '0.7',
            zIndex: -1,
          }}
        ></div>

        {/* Left Column (Video) */}
        <div className="flex-1 justify-center items-center w-full md:w-[465px]">
          <div className="w-[200px] h-[200px] md:w-[465px] md:h-[465px] rounded-full overflow-hidden border-0 border-green-deep">
            <video
              src="/src/assets/jj-video.mp4"
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column (SoundCloud Embed) */}
        <div className="flex flex-col w-[200px] h-[465px] md:w-[600px] md:h-[465px] space-y-4">
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/juliejonesdj&amp;"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
