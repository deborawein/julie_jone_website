import React, { useState } from 'react';
import { CustomButton } from './CustomButton';
import { SectionHeader } from './header/SectionHeader';

export const BioSection = ({ toggleNavbar }) => {
  const [expanded, setExpanded] = useState(false);

  const fullText = [
    "Julie Jones is a rising Italian-Eritrean artist whose music fuses percussion and deep beats with ethnic and ancestral sounds and soundscapes.",
    "She quickly garnered attention by showcasing her skills at notable events like Esoteric Festival and various venues across Melbourne and interstate.",
    "Her dedication to music drives her to constantly seek out the perfect tracks for her sets, aiming to transmit beautiful, unique energy and create a fulfilling experience on the dancefloor.",
    "Over the years, Julie has refined and evolved her sound into something distinct, honoring her Eritrean roots while incorporating rich, groovy bass lines and powerful tribal loops.",
    "Julie's ultimate aspiration is to take her audience on a mystical journey to her homeland, Africa, inviting them to experience the essence of her cultural roots through the immersive power of her music."
  ];

  const maxParagraphs = 2;
  const displayText = expanded ? fullText : fullText.slice(0, maxParagraphs);

  return (
    <section
      id="BIO"
      className="h-screen w-full snap-start relative bg-[rgb(18,18,18)] flex flex-col"
    >
      {/* Section Header */}
      <SectionHeader toggleNavbar={toggleNavbar} title="BIO" />

      {/* Content Area */}
      <div className="flex flex-1 items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Left Column: Profile Image */}
          <div
            className="relative flex items-center justify-center w-[220px] h-[220px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] rounded-full"
            style={{
              backgroundImage: 'url("/src/assets/profile-border-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="w-[90%] h-[90%] rounded-full overflow-hidden">
              <img
                src="/src/assets/jj-bio.jpg"
                className="object-cover w-full h-full rounded-full"
                alt="Julie Jones Bio"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Bio Text */}
          <div className="flex-1 text-center md:text-left space-y-6 max-w-lg">
            <h2 className="text-xl md:text-3xl text-white pt-4">
              I am{' '}
              <span className="text-[62px] xl:text-[82px] text-white font-hargita">
                JULIE JONES
              </span>
            </h2>
            {/* Dynamic Text Content */}
            <div className={`overflow-hidden ${expanded ? "h-auto" : "h-[200px]"}`}>
              {displayText.map((paragraph, index) => (
                <p key={index} className="text-sm xl:text-lg  text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
            {/* Toggle Button */}
            <CustomButton
              title={expanded ? 'SHOW LESS' : 'READ MORE'}
              onClick={() => setExpanded(!expanded)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
