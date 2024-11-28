import React from 'react';
import { MenuButton } from './navbar/MenuButton';
import { CustomButton } from './CustomButton';
import { FaFacebookF, FaSoundcloud, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Footer } from './footer/Footer';
import { BsChevronCompactRight } from 'react-icons/bs';
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
      <MenuButton onClick={toggleNavbar} />

      {/* CONTACT Text in Top Right Corner */}
      <div className="absolute top-8 right-[70px] text-3xl font-light text-orange-neon">
        CONTACT <span className='text-green-deep'>/</span>
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
        <form onSubmit={handleSubmit} className="w-full md:w-[40%] bg-black p-8 rounded-l-xl shadow-lg space-y-6 flex-1">

          <div>
            <label className="text-left text-lg font-light text-white" htmlFor="name">
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
            <label className="text-left text-lg font-light text-white" htmlFor="email">
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
            <label className="text-left text-lg font-light text-white" htmlFor="message">
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
            <CustomButton type='submit' title='SEND' />
          </div>
        </form>

        {/* Right Column (Contact Info) */}
        <div className="w-full md:w-[40%] text-center md:text-left mt-6 md:mt-0 flex flex-col items-center justify-center flex-1 bg-black">
          {/* Image above the "GET IN TOUCH" text */}
          <div className="mb-6 flex flex-row gap-2 items-center justify-center">
            <h2 className="text-[72px] md:text-[140px] text-white font-hargita">JULIE JONES</h2>
          </div>

          <div className="text-white flex flex-col items-center justify-center">
            <div className="mt-4 font-light flex flex-col items-center justify-center">
              <p>Melbourne, VIC</p>
              <p>giuliasantoni.au@gmail.com</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-6 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="w-14 h-14 bg-green-deep rounded-full flex items-center justify-center hover:bg-[#f57925] transition-all">
                  <FaFacebookF className="w-6 h-6 text-white" />
                </div>
              </a>
              <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
                <div className="w-14 h-14 bg-green-deep rounded-full flex items-center justify-center hover:bg-[#f57925] transition-all">
                  <FaSoundcloud className="w-6 h-6 text-white" />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="w-14 h-14 bg-green-deep rounded-full flex items-center justify-center hover:bg-[#f57925] transition-all">
                  <FaInstagram className="w-6 h-6 text-white" />
                </div>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <div className="w-14 h-14 bg-green-deep rounded-full flex items-center justify-center hover:bg-[#f57925] transition-all">
                  <FaYoutube className="w-6 h-6 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
};
