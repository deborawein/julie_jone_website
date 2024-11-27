import React from 'react';
import { MenuButton } from './navbar/MenuButton';
import { CustomButton } from './CustomButton';

export const BioSection = ({ toggleNavbar }) => {
  return (
    <section
      id='BIO'
      className='h-screen snap-center bg-[rgb(18,18,18)] text-gray-300 relative py-16 flex flex-col justify-center items-center'
    >
      <MenuButton onClick={toggleNavbar} />

      {/* BIO Text in Top Right Corner */}
      <div className='absolute top-8 right-[70px] text-3xl font-light text-orange-neon'>
        BIO <span className='text-green-deep'>/</span>
      </div>

      <div className='container mx-auto px-4 flex flex-col items-center text-center'>
        {/* Bio Content */}
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16'>
          {/* Profile Image with Background Border */}
          <div
            className='relative w-[200px] h-[200px] rounded-full overflow-hidden md:w-[600px] md:h-[600px]'
            style={{
              backgroundImage: 'url("/src/assets/profile-border-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '30px',
            }}
          >
            <div className='w-full h-full rounded-full overflow-hidden'>
              <img
                src='/src/assets/jj-bio.jpg'
                className='object-cover w-full h-full rounded-full'
                alt="Julie Jones Bio"
                loading="lazy" // Apply lazy loading here
              />
            </div>
          </div>

          {/* Bio Text */}
          <div className='text-center max-w-lg space-y-4 md:text-left'>
            <h2 className='text-3xl text-white'>
              I am <span className='text-[82px] text-white font-hargita'>JULIE JONES</span>
            </h2>
            <p className='text-lg py-5'>
              Julie Jones is a rising Italian-Eritrean artist whose music fuses percussion and deep beats with ethnic and ancestral sounds and soundscapes. She quickly garnered attention by showcasing her skills at notable events like Esoteric Festival and various venues across Melbourne and interstate...
            </p>

            <CustomButton title='MORE' />
          </div>
        </div>
      </div>
    </section>
  );
};
