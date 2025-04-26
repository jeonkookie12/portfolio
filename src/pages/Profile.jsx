import React, { useState } from 'react';
import './profile/AppFlip.css';
import './profile/Transitions.css';
import { useScrollAnimation } from './profile/useScrollAnimation';

const Profile = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [aboutRef, showAbout] = useScrollAnimation();
  const [imageRef, showImage] = useScrollAnimation();
  const [contactRef, showContact] = useScrollAnimation();

  const toggleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen w-full text-white font-sans flex flex-col bg-cover bg-center overflow-x-hidden">
      <div className="h-20" />

        {/* Hero Section */}
        <main className="flex-grow w-full">
        <section className="w-full pt-16 pb-14 px-6 sm:px-10 md:px-14 xl:px-28">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            {/* Text Content */}
            <div className="opacity-0 animate-float-up delay-300 text-center md:text-left w-full">
                <p className="text-gray-300 mb-4 text-2xl md:text-3xl lg:text-4xl">Hello, I'm</p>
                <h1 className="text-5xl md:text-6xl font-bold text-lime-400 leading-snug break-words">
                Jian Laurence A. De Leon
                </h1>
                <p className="text-gray-300 mt-6 md:mt-8 text-xl lg:text-2xl font-semibold">Full-Stack Developer</p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center w-full opacity-0 animate-slide-in-left delay-400">
                <img
                src="members/profile1.png"
                alt="Jian Laurence"
                className="h-auto max-h-[35rem] w-auto object-contain rounded-lg"
                />
            </div>
          </div>

            {/* Decorative Divider */}
            <div className="h-4 bg-green-700 rounded mt-4" />
        </section>


        {/* About Section */}
        <section
        ref={aboutRef}
        className={`w-full min-h-screen px-8 sm:px-10 md:px-14 xl:px-28 flex items-center justify-center ${
            showAbout ? 'animate-slide-in-up opacity-100' : 'opacity-0'
        }`}
        >
        <div className="flex flex-col md:flex-row items-center justify-between gap-14 w-full max-w-7xl pt-12 pb-14">
            
            {/* Profile Image */}
            <img
            ref={imageRef}
            src="members/profile2.png"
            alt="Avatar"
            className={`h-76 md:h-88 rounded-lg transition-all duration-1000 ${
                showImage ? 'animate-zoom-in-fade opacity-100' : 'opacity-0'
            }`}
            />

            {/* About Content */}
            <div className="max-w-3xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-lime-400 mb-8">About Me</h2>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            </div>
            
        </div>
        </section>


        {/* Skills Section */}
        <section className="px-8 sm:px-10 md:px-14 xl:px-28 py-16 mt-28">
          <h2 className="text-3xl md:text-4xl font-bold text-lime-200 mb-10 text-center underline underline-offset-8 decoration-lime-200">Skills and Expertise</h2>
          <div className="flex gap-10 justify-center flex-wrap">
            {["Java", "PHP", "JavaScript"].map((title, index) => {
              const descriptions = {
                Java: "Java is a high-level, class-based, object-oriented programming language widely used in enterprise environments.",
                PHP: "PHP is a server scripting language used to make dynamic and interactive web pages efficiently.",
                JavaScript: "JavaScript is a scripting language used to create and control dynamic website content.",
              };

              const imgs = {
                Java: "/skills-icons/java.png",
                PHP: "/skills-icons/php.png",
                JavaScript: "/skills-icons/javascript.png",
              };

              return (
                <div
                  key={index}
                  className="w-96 h-112 perspective cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
                  onClick={() => toggleFlip(index)}
                >
                  <div
                    className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${flippedIndex === index ? 'rotate-y-180' : ''}`}
                  >
                    <div className="card-face backface-hidden flex flex-col items-center justify-center text-white">
                      <img src={imgs[title]} alt={title} className="h-24 mb-4" />
                      <h3 className="text-lg font-bold">{title}</h3>
                    </div>
                    <div className="card-face backface-hidden rotate-y-180 flex items-center justify-center text-white p-8">
                        <p className="text-base md:text-lg text-center">{descriptions[title]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          className={`w-full px-8 sm:px-10 md:px-14 xl:px-28 py-28 mt-4 text-white transition-all duration-1200 ${
            showContact ? 'animate-fade-in opacity-200' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-lime-200">CONTACT US</h2>
          <p className="text-center mb-14 text-lime-200">For inquiries, collaborations, or support, reach out to us.</p>

          <div className="flex flex-col md:flex-row justify-between gap-16">
            {/* Form */}
            <form className="flex-1 space-y-8 text-left">
              <div>
                <label className="block mb-3 text-gray-100 font-medium text-sm md:text-base">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-md bg-zinc-800 text-white border border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition duration-200"
                />
              </div>
              <div>
                <label className="block mb-3 text-gray-100 font-medium text-sm md:text-base">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-md bg-zinc-800 text-white border border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition duration-200"
                />
              </div>
              <div>
                <label className="block mb-3 text-gray-100 font-medium text-sm md:text-base">Message</label>
                <textarea
                  rows="6"
                  placeholder="Your message"
                  className="w-full p-4 rounded-md bg-zinc-800 text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full !bg-green-700 hover:!bg-green-800 text-white px-8 py-4 rounded-md transition duration-200 text-sm md:text-base"
              >
                Send
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex-1 text-left text-base md:text-lg space-y-8 mt-20 md:mt-28">
            <div>
                <strong className="text-gray-100">Email:</strong>{' '}
                <a href="mailto:contact@proj.com" className="text-gray-300 hover:text-white transition duration-200">
                contact@proj.com
                </a>
            </div>
            <div>
                <strong className="text-gray-100">Phone:</strong>{' '}
                <span className="text-gray-300">+123 456 7890</span>
            </div>
            <div>
                <strong className="text-gray-100">Address:</strong>{' '}
                <span className="text-gray-300">1234 Street, City, Country</span>
            </div>
            <div>
                <strong className="text-gray-100">Follow us:</strong>
                <div className="flex items-center space-x-6 mt-4 justify-center md:justify-start">
                <a href="#" className="text-gray-300 hover:text-white transition">
                    <img src="icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                    <img src="icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition">
                    <img src="icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                </a>
                </div>
            </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
