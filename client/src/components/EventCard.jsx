import React from 'react'

export const EventCard = ({ date, title }) => {
  return (
        <div className="flex justify-between items-center bg-green-deep/80 text-white py-4 px-6 rounded-xl shadow-2xl">
          <div className="text-left">
            <div className="text-xl font-light">{date}</div>
            <div className="text-2xl font-bold">{title}</div>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-orange-neon text-white rounded-xl hover:bg-[#e06b00] transition-all">
              INFO
            </button>
            <button className="px-4 py-2 bg-orange-neon text-white rounded-xl hover:bg-[#e06b00] transition-all">
              RSVP
            </button>
          </div>
        </div>
  )
}
