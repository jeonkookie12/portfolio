import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './profile/Transitions.css';

// Member Thumbnails
import shaThumbnail from "../assets/members/sha.svg";
import sheThumbnail from "../assets/members/she.svg";
import niksThumbnail from "../assets/members/niks.svg";
import jiThumbnail from "../assets/members/ji.svg";
import jasThumbnail from "../assets/members/jas.svg";

// Social Media Icons
import facebookIcon from "../assets/social-media-icons/facebook.svg";
import instagramIcon from "../assets/social-media-icons/instagram.svg";
import emailIcon from "../assets/social-media-icons/email.svg";
import githubIcon from "../assets/social-media-icons/github.svg";
import twitterIcon from "../assets/social-media-icons/twitter.svg";

// Team Icon
import teamIcon from "../assets/icons/team-icon2.svg";


const teamMembers = [
  {
    id: 1,
    name: "SHANIAH",
    redirect: "/members/sha",
    thumbnail: shaThumbnail,
    full: shaThumbnail,
    socials: [
      { type: "facebook", link: "https://www.facebook.com/share/1BZuubRGHd/", icon: facebookIcon },
      { type: "instagram", link: "https://www.instagram.com/jae.shaniah?igsh=cWkxZG9kd3p4bzl5", icon: instagramIcon },
      { type: "email", link: "mailto:shaniahjaer@gmail.com", icon: emailIcon },
    ],
  },
  {
    id: 2,
    name: "SHERAN",
    redirect: "/members/she",
    thumbnail: sheThumbnail,
    full: sheThumbnail,
    socials: [
      { type: "github", link: "https://github.com/jeonkookie12", icon: githubIcon },
      { type: "email", link: "mailto:ic.sheranpaul.casquejo@cvsu.edu.ph", icon: emailIcon },
    ],
  },
  {
    id: 3,
    name: "NICOLE",
    redirect: "/members/niks",
    thumbnail: niksThumbnail,
    full: niksThumbnail,
    socials: [
      { type: "facebook", link: "#", icon: facebookIcon },
      { type: "instagram", link: "https://www.instagram.com/shanne_ncl?igsh=MXBocTg5dDRsMHYzaQ==", icon: instagramIcon },
      { type: "twitter", link: "https://x.com/shnnx_nics", icon: twitterIcon },
      { type: "email", link: "mailto:nicoleshaneadantis@gmail.com", icon: emailIcon },
    ],
  },
  {
    id: 4,
    name: "JIAN",
    redirect: "/members/ji",
    thumbnail: jiThumbnail,
    full: jiThumbnail,
    socials: [
      { type: "facebook", link: "https://www.facebook.com/share/162UKfarE1/", icon: facebookIcon },
      { type: "email", link: "mailto:jiandeleon07@gmail.com", icon: emailIcon},
    ],
  },
  {
    id: 5,
    name: "JASMIN",
    redirect: "/members/jas",
    thumbnail: jasThumbnail,
    full: jasThumbnail,
    socials: [
      { type: "facebook", link: "https://www.facebook.com/share/1AZmMDjAzr/", icon: facebookIcon },
      { type: "instagram", link: "https://www.instagram.com/marie_jas123?igsh=b2ZvdXhhazUwanRi", icon: instagramIcon },
      { type: "email", link: "mailto:jadl59302@gmail.com", icon: emailIcon },
    ],
  },
];

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [headerAnimate, setHeaderAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setHeaderAnimate(true), 150);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 pt-12">

      {/* Header section with animated logo/text movement on page load */}
      <div className="w-full flex justify-center px-4 py-14 mb-10">
        <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-center lg:justify-center lg:gap-10 gap-6 text-center lg:text-left">

          {/* Icon + Header */}
          <div
            className={`flex flex-col items-center text-white transition-all duration-1200 ease-in-out
                        ${headerAnimate ?  "lg:translate-x-10 lg:scale-[0.68]": "lg:translate-x-[15.0rem] lg:scale-100"}`}
          >
            <img
              src={teamIcon}
              alt="Team Icon"
              className="w-16 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-30 lg:h-24 transition-transform duration-1000 ease-in-out"
            />
            <h2 className="font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              OUR TEAM
            </h2>
          </div>

          {/* Green Separator */}
          <div
            className={`hidden lg:flex h-28 w-[2px] bg-green-500 transition-all duration-1000 ease-in-out delay-200
                        ${headerAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          ></div>

          {/* Subtitle */}
          <p
            className={`text-zinc-300 font-medium max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl
                        text-sm sm:text-base md:text-lg text-center lg:text-left transition-all duration-1000 ease-in-out delay-300
                        ${headerAnimate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
          >
            An inspired effort by a team committed to turning vision into reality.
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap gap-10 justify-center overflow-x-visible animate-zoom-in-fade delay-200">
        {teamMembers.map((member, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={member.id}
              className="flex flex-col items-center transition-all duration-300 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div
                className={`w-[240px] h-[300px] sm:w-[280px] sm:h-[350px] md:w-[300px] md:h-[400px] transition-transform duration-500 ease-out overflow-hidden rounded-lg shadow-md relative brightness-99 hover:brightness-100 ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              >
                <img
                  src={member.thumbnail}
                  alt={member.name}
                  onClick={() => navigate(member.redirect)}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>

              {/* Name + Socials */}
              <div className="relative mt-6 w-[280px] sm:w-[300px]">
                <div className="flex justify-center items-center text-center w-full relative">
                  <div
                    className={`flex items-center gap-3 transition-all duration-700 ease-in-out transform ${
                      isHovered
                        ? "translate-x-[0px] translate-y-[10px]"
                        : "translate-x-15 translate-y-0"
                    }`}
                  >
                    <p className="text-zinc-200 text-lg font-semibold whitespace-nowrap transition-all duration-700 ease-in-out">
                      {member.name}
                    </p>

                    <div
                      className={`flex gap-2 transition-all duration-500 ease-in-out ${
                        isHovered
                          ? "opacity-100 translate-x-0 delay-300"
                          : "opacity-0 translate-x-2 pointer-events-none delay-0"
                      }`}
                    >
                      {member.socials.map((social, i) => (
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
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
