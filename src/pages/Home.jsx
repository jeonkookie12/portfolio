import React, { useEffect, useRef, useState } from "react";
import Logo from '../assets/logo.png';
import Int1 from '../assets/team-bg/int1.svg';
import Int2 from '../assets/team-bg/int2.svg';
import Int3 from '../assets/team-bg/int3.svg';
import Int4 from '../assets/team-bg/int4.svg';
import MissionLogo from '../assets/icons/animated-mission-logo.gif';
import VisionLogo from '../assets/icons/animated-vision-logo.gif';


function useInView(options) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
}

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const [introRef, isIntroVisible] = useInView({ threshold: 0.6 });
  const [missionVisionRef, isMissionVisionVisible] = useInView({ threshold: 0.6 });

  return (
    <>

      <div className="flex flex-col min-h-screen">
        {/* Title and Logo */}
        <div className="flex flex-col items-center justify-center flex-1 text-white transition-all duration-700 ease-out">
          <h5
            className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide transform transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            TEAM PORTFOLIO
          </h5>

          <img
            src={Logo}
            alt="SSNJJ"
            className={`h-40 sm:h-60 md:h-80 w-auto mb-6 transform transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
        </div>
      </div>

      {/* Introduction Section */}
<section
  ref={introRef}
  className="flex items-center justify-center min-h-screen text-center px-4 z-10 relative"
>
  <div
    className={`max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-14 transition-all duration-700 ease-out transform ${
      isIntroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`}
  >
    {/* Left: Text Content */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl md:text-4xl px-2 font-bold mb-8 text-white text-center lg:text-left">
        INTRODUCTION
        <span className="block h-1 w-69 bg-green-500 mt-2 mx-auto lg:mx-0 rounded-full"></span>
      </h2>

      <div className="text-gray-300 text-lg md:text-xl leading-relaxed text-center lg:text-left">
        <p className="mb-6">
          A peer of Information Technology students embarking on their
          professional careers is stepping into a diverse and fast-evolving
          industry with specialized skills and a passion for technology.
        </p>

        <p>
          Their expertise in programming, networking, cybersecurity, and
          database administration prepares them as they start their journey in
          the professional world. They are excited to grow their skills, gain
          real-world experience, and contribute to the ever-evolving field of
          technology.
        </p>
      </div>
    </div>

  
   {/* Right: Scattered Portfolio Images */}
<div className="lg:w-1/2 grid grid-cols-2 gap-6">
  <img
    src={Int1}
    alt="Portfolio 1"
    className="rounded-xl shadow-lg h-40 w-full object-cover transform rotate-2 transition-all duration-500 hover:rotate-0 hover:scale-105"
  />
  <img
    src={Int2}
    alt="Portfolio 2"
    className="rounded-xl shadow-lg h-40 w-full object-cover transform -rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105"
  />
  <img
    src={Int3}
    alt="Portfolio 3"
    className="rounded-xl shadow-lg h-40 w-full object-cover transform rotate-1 transition-all duration-500 hover:rotate-0 hover:scale-105"
  />
  <img
    src={Int4}
    alt="Portfolio 4"
    className="rounded-xl shadow-lg h-40 w-full object-cover transform -rotate-2 transition-all duration-500 hover:rotate-0 hover:scale-105"
  />
</div>

  </div>
</section>


     {/* Mission and Vision Section */}
<section
  ref={missionVisionRef}
  className="relative min-h-screen flex items-center justify-center px-4"
>
  <div className="max-w-7xl w-full">
    <div className="flex flex-col md:flex-row gap-16">
      {/* Mission Card */}
      <div
        className={`flex-1 h-auto bg-gray-900 bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg p-8 transition duration-700 ease-out transform ${
          isMissionVisionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={MissionLogo}
            alt="Mission Logo"
            className="h-32 w-32 mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white relative">
            Our Mission
          </h2>
          <span className="block h-1 w-56 bg-green-500 mt-3 rounded-full"></span>
        </div>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center">
          With our initiative to contribute in the development of further
          technological solutions enhancing the industry standards and
          addressing real-world challenges. Through hands-on projects
          and continuous learning, we aim to develop solutions that
          make technology more efficient, secure, and effective for businesses and users.
        </p>
      </div>

      {/* Vision Card */}
      <div
        className={`flex-1 h-auto bg-gray-900 bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg p-8 transition duration-700 ease-out transform ${
          isMissionVisionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex flex-col items-center text-center mb-6">
          <img
          src={VisionLogo}
          alt="Vision Logo"
            className="h-32 w-32 mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white relative">
            Our Vision
          </h2>
          <span className="block h-1 w-50 bg-green-500 mt-3 rounded-full"></span>
        </div>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center">
          To create a future where technology not only enhances industry standards
          but also empowers individuals and communities globally, fostering trust,
          inclusivity, and progress in an ever-evolving digital landscape.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
