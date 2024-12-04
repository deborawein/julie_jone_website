import React from 'react';
import { MenuButton } from './navbar/MenuButton';
import { CustomButton } from './CustomButton';
import { FaFacebookF, FaSoundcloud, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Footer } from './footer/Footer';
import { SectionHeader } from './header/SectionHeader';
import emailjs from 'emailjs-com';

export const ContactSection = ({ toggleNavbar }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_n9ike5f', // Replace with your EmailJS service ID
        'template_djjuliejones', // Replace with your EmailJS template ID
        e.target,
        'olf5au96-_-7tOD43' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          e.target.reset(); // Reset the form after submission
        },
        (error) => {
          console.error('Error:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section
      id="CONTACT"
      className="h-screen snap-center bg-[rgb(18,18,18)] text-gray-300 relative py-16 flex flex-col items-center justify-center"
    >
      {/* Section Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <SectionHeader toggleNavbar={toggleNavbar} title="CONTACT" />
      </div>


      {/* Main Content with a border and background image */}
      <div
        className="container mx-auto p-3 rounded-xl flex flex-col md:flex-row items-stretch justify-center mt-[-50px] border-8 border-transparent bg-clip-border"
        style={{
          backgroundImage: `url('/src/assets/profile-border-bg.jpg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          borderImage: 'url(/mnt/data/jj-bg-bio.jpg) 30 round',
        }}
      >
        {/* Left Column (Form) */}
        <form onSubmit={handleSubmit} className="w-full md:w-[40%] bg-black p-8 rounded-t-xl md:rounded-l-xl shadow-lg space-y-6 flex-1">
          <div>
            <label className="text-left text-sm md:text-lg font-light text-white" htmlFor="name">
              NAME
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 mt-2 bg-[rgb(18,18,18)] text-white border border-gray-900 rounded-lg focus:outline-none focus:border-[#136f5f]"
            />
          </div>

          <div>
          <label className="text-left text-sm md:text-lg font-light text-white" htmlFor="email">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 mt-2 bg-[rgb(18,18,18)] text-white border border-gray-900 rounded-lg focus:outline-none focus:border-[#136f5f]"
            />
          </div>

          <div>
          <label className="text-left text-sm md:text-lg font-light text-white" htmlFor="message">
              MESSAGE
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full px-4 py-2 mt-2 bg-[rgb(18,18,18)] text-white border border-gray-900 rounded-lg focus:outline-none focus:border-[#136f5f]"
            ></textarea>
          </div>

          <div className="text-center">
            <CustomButton type="submit" title="SEND" />
          </div>
        </form>

        {/* Right Column (Contact Info) */}
        <div className="w-full text-center flex flex-col items-center justify-center flex-1 bg-black pb-4 rounded-b-xl md:rounded-r-xl">
          <div className="flex-row items-center justify-center">
            <h2 className="text-[42px] sm:text-[72px] md:text-[100px] xl:text-[140px] text-white font-hargita">JULIE JONES</h2>
          </div>
              <p className='text-sm md:text-lg '>Melbourne, VIC</p>
              <p className='text-sm'>giuliasantoni.au@gmail.com</p>
            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 xl:w-14 xl:h-14 bg-green-deep rounded-full flex items-center justify-center hover:bg-[#f57925] transition-all">
                  <FaFacebookF className="w-6 h-6 text-white" />
                </div>
              </a>
              <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 xl:w-14 xl:h-14 bg-green-deep rounded-full flex items-center justify-center hover:bg-[#f57925] transition-all">
              <FaSoundcloud className="w-6 h-6 text-white" />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 xl:w-14 xl:h-14 bg-green-deep rounded-full flex items-center justify-center hover:bg-[#f57925] transition-all">
              <FaInstagram className="w-6 h-6 text-white" />
                </div>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 xl:w-14 xl:h-14 bg-green-deep rounded-full flex items-center justify-center hover:bg-[#f57925] transition-all">
              <FaYoutube className="w-6 h-6 text-white" />
                </div>
              </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
};
