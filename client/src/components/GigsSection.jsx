import React, { useEffect, useState } from 'react';
import { MenuButton } from './navbar/MenuButton';
import { EventCard } from './EventCard';
import { SectionHeader } from './header/SectionHeader';
import { client } from '../config/sanityClient';

export const GigsSection = ({ toggleNavbar }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const query = `*[_type == "event"] | order(date asc) {
        _id,
        date,
        title,
        local,
        infoUrl,
        ticketUrl
      }`;
      const data = await client.fetch(query);

      // Filter events to only include future dates and limit to 4
      const today = new Date().setHours(0, 0, 0, 0); // Midnight today
      const filteredEvents = data
        .filter(event => new Date(event.date).setHours(0, 0, 0, 0) >= today) // Future or today
        .slice(0, 4); // Limit to 4 events

      setEvents(filteredEvents);
    };

    fetchEvents();
  }, []);

  return (
    <section
      id="GIGS"
      className="h-screen snap-center bg-[rgb(18,18,18)] text-gray-300 relative py-16 flex flex-col justify-between items-center"
      style={{
        backgroundImage: 'url("/src/assets/jj-play.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        loading: 'lazy',
      }}
    >
      {/* Section Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <SectionHeader toggleNavbar={toggleNavbar} title="GIGS" />
      </div>

      {/* Background opacity */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col justify-end text-center md:text-left relative z-20 w-full h-full">
        <h2 className="text-5xl text-white self-center font-bold mb-8 text-left w-full 2xl:w-[70%]">
          UPCOMING GIGS
        </h2>
        <div className="space-y-8 self-center w-full 2xl:w-[70%] mb-10">
          {events.map((event) => (
            <EventCard
              key={event._id}
              date={new Date(event.date).toLocaleDateString()}
              title={event.title}
              local={event.local}
              infoUrl={event.infoUrl}
              ticketUrl={event.ticketUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
