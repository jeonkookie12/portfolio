import React, { useState, useEffect } from "react";

import project1 from '../assets/projects/1.png';
import project2 from '../assets/projects/2.png';
import project3 from '../assets/projects/3.png';
import project4 from '../assets/projects/4.png';
import project5 from '../assets/projects/5.png';
import project6 from '../assets/projects/6.png';
import project7 from '../assets/projects/7.png';

import pythonIcon from '../assets/icons/python.svg';
import javaIcon from '../assets/icons/java.svg';
import phpIcon from '../assets/icons/php.svg';
import htmlIcon from '../assets/icons/html5.svg';
import cssIcon from '../assets/icons/css.svg';
import bootstrapIcon from '../assets/icons/bootstrap.svg';
import tailwindIcon from '../assets/icons/tailwindcss.svg';
import reactIcon from '../assets/icons/react.svg';
import projectIcon from '../assets/icons/project.svg';


const Projects = () => {
  const [expandedCards, setExpandedCards] = useState([]); // Store expanded cards
  const [fadeIn, setFadeIn] = useState(false); // State to control fade-in effect

  const handleCardClick = (idx) => {
    // If the card is already expanded, collapse it; else expand it
    if (expandedCards.includes(idx)) {
      setExpandedCards((prevState) => prevState.filter((card) => card !== idx));
    } else {
      setExpandedCards((prevState) => [...prevState, idx]);
    }

    setTimeout(() => {
      const element = document.getElementById(`project-${idx}`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center", // Ensure it's centered
        });
      }
    }, 300);
  };

  useEffect(() => {
    // Set fade-in to true after a slight delay to allow for the page rendering
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300); // Delay to trigger the fade-in effect
    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main
          className={`flex-grow mt-32 px-8 md:px-16 lg:px-32 text-white pb-32 transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-20 relative text-center text-white flex items-center justify-center gap-4">
            PROJECTS
            <img
              src={projectIcon}
              alt="Project Icon"
              className="h-8 w-8 invert"
            />
          </h2>

          {/* Update the grid to display two cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "TECHFruit Billing System",
                image: project1,
                description:
                  "The upgraded TECHFruit Billing System now features a user-friendly GUI, replacing the previous console-based design. This dedicated application offers a visually appealing interface, making item selection effortless. It streamlines order management and payments, providing a seamless digital marketplace experience for businesses of all types.",
                tech: [
                  { icon: pythonIcon, name: "Python" },
                ],
              },
              {
                title: "Aling Nena's Eatery POS",
                image: project2,
                description:
                  "The Aling Nena’s Eatery POS is an offline billing system that streamlines order processing, calculates totals, and generates receipts efficiently, ensuring smooth eatery operations without internet dependency.",
                tech: [
                  { icon: pythonIcon, name: "Python" },
                ],
              },
              {
                title: "Nightingale Pharmacy Payroll System",
                image: project3,
                description:
                  "The Offline Payroll System for Nightingale Pharmacy efficiently manages employee salaries, attendance, and payslips without an internet connection, ensuring accurate and secure payroll processing.",
                tech: [
                  { icon: javaIcon, name: "Java" },
                  { icon: phpIcon, name: "PHP" },
                ],
              },
              {
                title: "Barangay Population Management System",
                image: project4,
                description:
                  "An automated pill dispenser with a notification system that reminds users to take medicine on schedule.",
                tech: [
                  { icon: phpIcon, name: "PHP" },
                  { icon: javaIcon, name: "Java" },
                ],
              },
              {
                title: "Aling Nena's Eatery POS",
                image: project5,
                description:
                  "The Aling Nena’s Eatery POS is an offline billing system that streamlines order processing, calculates totals, and generates receipts efficiently, ensuring smooth eatery operations without internet dependency.",
                tech: [
                  { icon: htmlIcon, name: "HTML" },
                  { icon: cssIcon, name: "CSS" },
                  { icon: bootstrapIcon, name: "Bootstrap" },
                  { icon: phpIcon, name: "Php" },
                ],
              },
              {
                title: "JobSeekers",
                image: project6,
                description:
                  "An automated pill dispenser with a notification system that reminds users to take medicine on schedule.",
                tech: [
                  { icon: htmlIcon, name: "HTML" },
                  { icon: cssIcon, name: "CSS" },
                  { icon: bootstrapIcon, name: "Bootstrap" },
                  { icon: phpIcon, name: "Php" },
                ],
              },
              {
                title: "ElderLink",
                image: project7,
                description:
                  "An automated pill dispenser with a notification system that reminds users to take medicine on schedule.",
                tech: [
                  { icon: htmlIcon, name: "HTML" },
                  { icon: tailwindIcon, name: "Tailwind CSS" },
                  { icon: reactIcon, name: "React" },
                  { icon: phpIcon, name: "Php" },
                ],
              },
            ].map((project, idx) => (
 
            <div
              id={`project-${idx}`}
              key={idx}
              onClick={() => handleCardClick(idx)}
              className={`relative group overflow-hidden rounded-2xl shadow-lg bg-gray-900 cursor-pointer transition-all duration-500 ${
                expandedCards.includes(idx)
                  ? "col-span-full max-h-[1000px]" // Expanded state height
                  : "max-h-[360px]" // Collapsed state height
              } w-full sm:w-[calc(50% - 16px)] lg:w-[calc(50% - 16px)] xl:w-[calc(33.33% - 16px)]`} // Adjust width for different screen sizes
              style={{
                transition: "all 0.5s ease",
                maxHeight: expandedCards.includes(idx) ? "1000px" : "360px", // Default height for collapsed cards
                overflow: "hidden",
              }}
            >
              {/* Image Container */}
              <div className="relative w-full">
                {/* Desktop View: Adjust the image for desktop size */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-all duration-500 ease-in-out ${
                    expandedCards.includes(idx) ? "hidden" : "group-hover:scale-110"
                  } 
                  sm:max-h-[300px] lg:max-h-[400px] xl:max-h-[500px]`} // Set height limits based on screen size
                />
              </div>

              {/* Overlay (Visible on hover when not expanded) */}
              {!expandedCards.includes(idx) && (
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 p-6 flex flex-col justify-between">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-sm">{project.description}</p>
                </div>
              )}

              {/* Expanded Content (Only shown when the card is expanded) */}
              {expandedCards.includes(idx) && (
                <div
                  className={`transition-all duration-500 ease-in-out transform ${
                    expandedCards.includes(idx)
                      ? "opacity-100 scale-100 pointer-events-auto animate-expandAnimation"
                      : "opacity-0 scale-95 pointer-events-none animate-collapseAnimation"
                  } flex flex-col lg:flex-row p-6 gap-6 bg-gray-900`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full lg:w-1/2 rounded-xl object-cover"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                      <p className="mb-4 text-sm">{project.description}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((techItem, techIdx) => (
                          <span
                            key={techIdx}
                            className="flex items-center gap-2 text-sm bg-green-600 px-3 py-2 rounded-full text-white"
                          >
                            <img
                              src={techItem.icon}
                              alt={techItem.name}
                              className="w-5 h-5"
                            />
                            {techItem.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}  
            </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Projects;
