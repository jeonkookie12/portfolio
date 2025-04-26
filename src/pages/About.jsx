import React from "react";
import { NavLink } from "react-router-dom";
import FrontEndCard from "./about-page/development-skills-cards/FrontEndCard";
import BackEndCard from "./about-page/development-skills-cards/BackEndCard";
import UIDesignerCard from "./about-page/development-skills-cards/UIDesignerCard";
import SecurityCard from "./about-page/development-skills-cards/SecurityCard";
import FloatingImages from "./about-page/InteractiveSVG";
import useInView from "../hooks/useInView";

// Import images
import purposeIcon1 from "../assets/icons/purpose-icon1.png";
import purposeIcon2 from "../assets/icons/purpose-icon2.png";

const About = () => {
  const [introRef, isIntroVisible] = useInView({ threshold: 0.5 });
  const [purposeRef, isPurposeVisible] = useInView({ threshold: 0.5 });
  const [programmingRef, isProgrammingVisible] = useInView({
    threshold: window.innerWidth < 768 ? 0.1 : 0.5,
  });

  return (
    <>
      {/* Introduction Section */}
      <section
        ref={introRef}
        className="flex flex-col items-center justify-center min-h-screen text-center px-4 z-10 relative pt-20 pb-20 md:pt-16 md:pb-16"
      >
        {/* Header */}
        <div
          className={`transition-all duration-700 ease-out transform mb-12 ${
            isIntroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-white">
            TEAM BACKGROUND
            <span className="block h-1 w-92 bg-green-500 mx-auto mt-2 mb-2"></span>
          </h2>
        </div>

        {/* Content Section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full transition-all duration-700 ease-out transform ${
            isIntroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Text Column */}
          <div className="flex justify-center">
            <div className="text-gray-300 text-lg md:text-xl lg:text-2xl text-justify leading-relaxed space-y-8 w-full max-w-2xl px-4">
              <p>
                Our team of enthusiastic and motivated developers understand how powerful technology
                can be in simplifying tasks, creating innovations, and turning ideas into reality.
                We started primarily as web developers and enjoyed working on user experience. Now,
                we are passionate about creating digital solutions that are easy to use, beautiful,
                and serve their purpose.
              </p>
              <p>
                Individually, each of us is skilled in something completely different—be it Front-end
                design, Back-end logic or even logic. But as a team, we learn, grow, collaborate and
                go beyond limits to create truly impactful solutions.
              </p>
            </div>
          </div>

          {/* SVG + Button Column */}
          <div className="flex flex-col items-center space-y-6 w-full max-w-2xl px-4">
            <FloatingImages />
            <NavLink
              to="/team"
              className="inline-block backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
            >
              MEET THE TEAM
            </NavLink>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section ref={purposeRef} className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl w-full">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h3
              className={`text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block transition-all duration-700 ease-out transform ${
                isPurposeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              PURPOSE
              <span className="block h-1 w-50 bg-green-500 mt-2 rounded-full"></span>
            </h3>
          </div>

          {/* Purpose Description */}
          <div
            className={`text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed mb-12 transition-all duration-700 ease-out transform ${
              isPurposeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            } max-w-4xl mx-auto`}
          >
            {/* Empty for now, can add more content if needed */}
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Block */}
            <div
              className={`relative w-full max-w-md mx-auto transition-all duration-700 ease-out transform ${
                isPurposeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex flex-col justify-center items-center text-center px-4 py-6">
                <img
                  src={purposeIcon1}
                  alt="Purpose Icon 1"
                  className="w-24 md:w-28 lg:w-32 mb-6 object-contain"
                />
                <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed text-center">
                  Our portfolio stands representative of all our endeavors; it is not solely a measure of
                  sophistry but rather a deeply rooted narrative depicting our learning, efforts, and thought
                  processes.
                </p>
              </div>
            </div>

            {/* Right Block */}
            <div
              className={`relative w-full max-w-md mx-auto transition-all duration-700 ease-out transform ${
                isPurposeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex flex-col justify-center items-center text-center px-4 py-6">
                <img
                  src={purposeIcon2}
                  alt="Purpose Icon 2"
                  className="w-24 md:w-28 lg:w-32 mb-6 object-contain"
                />
                <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed text-center">
                  We aim to emphasize growth, not just results — recognizing effort, adaptation, and creativity
                  as essential elements of progress in any learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programming and Software Development Section */}
      <section
        ref={programmingRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
      >
        {/* Section Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ease-in-out transform ${
            isProgrammingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Programming & Software Development
            <span className="block h-1 lg:w-185 sm:w-150 md:w-180 bg-green-500 mt-2 rounded-full"></span>
          </h3>
        </div>

        {/* Cards Container */}
        <div
          className={`max-w-7xl w-full flex flex-col gap-10 transition-all duration-700 ease-in-out transform ${
            isProgrammingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-10">
            <FrontEndCard />
            <BackEndCard />
          </div>
          <UIDesignerCard />
          <SecurityCard />
        </div>
      </section>
    </>
  );
};

export default About;
