import React, { useState } from 'react';
import '../AppFlip.css';
import '../Transitions.css';
import { useScrollAnimation } from '../useScrollAnimation';

import githubIcon from '../../../assets/social-media-icons/github.svg';
import emailIcon from '../../../assets/social-media-icons/email.svg';

import sheImage from '../../../assets/members/she.png';
import sheImage1 from '../../../assets/members/she1.png';

import cardImage from '../../../assets/card.png'; 
import htmlIcon from '../../../assets/skills-icons/html.png';
import phpIcon from '../../../assets/skills-icons/php.png';
import javascriptIcon from '../../../assets/skills-icons/javascript.png';

const SheProfile = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [aboutRef, showAbout] = useScrollAnimation();
  const [imageRef, showImage] = useScrollAnimation();
  const [contactRef, showContact] = useScrollAnimation();

  const toggleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    const subject = `${fullName} - ${email}`;
    const body = `Message: ${message}`;

    // Open the default email client with the pre-filled email
    window.location.href = `mailto:ic.sheranpaul.casquejo@cvsu.edu.ph?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };


  return (
    <div className="min-h-screen w-full text-white font-sans flex flex-col bg-cover bg-center overflow-x-hidden">
      <div className="h-20" />

      {/* Hero Section */}
      <main className="flex-grow w-full">
        <section className="w-full pt-16 pb-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="opacity-0 animate-float-up delay-300 text-center md:text-left w-full">
              <p className="text-gray-300 mb-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lime-400 leading-snug break-words px-2 sm:px-0">
                Sheran Paul Casquejo
              </h1>
              <p className="text-gray-300 mt-5 sm:mt-6 md:mt-8 text-lg sm:text-xl lg:text-2xl font-semibold">
                Back-End Developer
              </p>

              {/* Social Icons */}
              <div className="mt-6 sm:mt-6 md:mt-8 px-2 flex justify-center md:justify-start gap-3 sm:gap-4">
                {[ 
                  { type: "github", link: "https://github.com/jeonkookie12", icon: githubIcon },
                  { type: "email", link: "mailto:ic.sheranpaul.casquejo@cvsu.edu.ph", icon: emailIcon },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={social.icon}
                      alt={social.type}
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center w-full opacity-0 animate-slide-in-left delay-400">
              <img
                src={sheImage}
                alt="Sheran"
                className="h-auto max-h-[28rem] sm:max-h-[30rem] md:max-h-[35rem] w-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Green Divider */}
          <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 mx-4 sm:mx-0 h-4 bg-green-700 rounded" />
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          className={`w-full min-h-screen px-8 sm:px-10 md:px-14 xl:px-28 flex items-center justify-center ${showAbout ? 'animate-slide-in-up opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-14 w-full max-w-7xl pt-12 pb-14">
            {/* Profile Image */}
            <img
              ref={imageRef}
              src={sheImage1}
              alt="Avatar"
              className={`h-76 md:h-88 rounded-lg transition-all duration-1000 ${showImage ? 'animate-zoom-in-fade opacity-100' : 'opacity-0'}`}
            />

            {/* About Content */}
            <div className="max-w-3xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-lime-400 mb-8">About Me</h2>
              <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
                I am a junior web developer who enjoys crafting functional and user-friendly websites, focusing on HTML, JavaScript, PHP, and backend logics to build dynamic and efficient web solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-8 sm:px-10 md:px-14 xl:px-28 py-16 mt-28">
          <h2 className="text-3xl md:text-4xl font-bold text-lime-200 mb-10 text-center underline underline-offset-8 decoration-lime-200">Skills and Expertise</h2>
          <div className="flex gap-10 justify-center flex-wrap">
            {["HTML", "PHP", "JavaScript"].map((title, index) => {
              const descriptions = {
                HTML: "HTML is the markup language used to structure and present content on web pages.",
                PHP: "PHP is a server scripting language used to make dynamic and interactive web pages efficiently.",
                JavaScript: "JavaScript is a scripting language used to create and control dynamic website content.",
              };

              const imgs = {
                HTML: htmlIcon,
                PHP: phpIcon,
                JavaScript: javascriptIcon,
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
                    {/* Front */}
                    <div
                      className="card-face backface-hidden flex flex-col items-center justify-center text-white"
                      style={{
                        backgroundImage: `url(${cardImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <img src={imgs[title]} alt={title} className="h-24 mb-4" />
                      <h3 className="text-lg font-bold">{title}</h3>
                    </div>

                    {/* Back */}
                    <div
                      className="card-face rotate-y-180 backface-hidden flex items-center justify-center text-white p-8"
                      style={{
                        backgroundImage: `url(${cardImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
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
          <p className="text-center mb-14 text-lime-200">Feel free to reach out for collaborations, projects, or any inquiries.</p>

          <div className="flex justify-center">
            <form className="w-full max-w-5xl space-y-10 text-left" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-3 text-gray-100 font-medium text-sm md:text-base">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-5 rounded-md bg-zinc-800 text-white border border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition duration-200"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-3 text-gray-100 font-medium text-sm md:text-base">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-5 rounded-md bg-zinc-800 text-white border border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-3 text-gray-100 font-medium text-sm md:text-base">Message</label>
                <textarea
                  rows="6"
                  placeholder="Your message"
                  className="w-full p-5 rounded-md bg-zinc-800 text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full !bg-green-700 hover:!bg-green-800 text-white px-8 py-4 rounded-md transition duration-200 text-sm md:text-base"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};


export default SheProfile;
