import React from 'react';
import { SectionHeader } from './header/SectionHeader';

export const MixesSection = ({ toggleNavbar }) => {
  return (
    <section
      id="MIXES"
      className="h-screen snap-center bg-[#ecd8b6] text-gray-300 relative"
    >
      {/* Section Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <SectionHeader toggleNavbar={toggleNavbar} title="MIXES" />
      </div>

      {/* Video Background */}
      <video
        src="/images/jj-video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        loading="lazy"
      />

      {/* Optional: Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Shared Container with Background Image */}

      <div
        className="relative flex items-center justify-center h-full w-full z-20"

      >
        <div className='flex flex-col lg:flex-row rounded-t-full lg:rounded-r-xl lg:rounded-l-full'
         style={{
          backgroundImage: 'url("/images/profile-square-bg.jpg")',
          backgroundSize: 'contain',
        }}>
          {/* Left Column: Video */}

          <div className="flex items-center justify-center self-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
            <div className="w-[90%] h-[90%] rounded-full overflow-hidden">
              <video
                src="/images/jj-video.mp4"
                className="object-cover w-full h-full"
                autoPlay
                loop
                muted
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: SoundCloud Embed */}
          <div className="flex items-center justify-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
            <div className="w-[90%] h-[90%] rounded-lg overflow-hidden bg-white">
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
        </div>
      </div>
    </section>
  );
};
