import React, { useState } from "react";

// Import images properly
import Niks from "../../assets/members/niks.svg";
import Sha from "../../assets/members/sha.svg";
import Jas from "../../assets/members/jas.svg";
import Ji from "../../assets/members/ji.svg";
import She from "../../assets/members/she.svg";
import TeamIcon from "../../assets/icons/team-icon.svg";

const FloatingImages = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full flex justify-center items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-[420px] h-[420px]">
        {/* Top Left */}
        <div
          className={`w-20 h-20 rounded-full bg-green-100 flex items-center justify-center absolute top-[10%] left-[15%] transition-all duration-500 ${
            hovered ? "-translate-x-5 -translate-y-2 rotate-6" : ""
          }`}
        >
          <img src={Niks} alt="Niks" className="w-20 h-20 rounded-full" />
        </div>

        {/* Top Right */}
        <div
          className={`w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center absolute top-[5%] right-[10%] transition-all duration-500 ${
            hovered ? "translate-x-3 -translate-y-3 -rotate-3" : ""
          }`}
        >
          <img src={Sha} alt="Sha" className="w-20 h-20 rounded-full" />
        </div>

        {/* Left Middle */}
        <div
          className={`w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center absolute top-[45%] left-[5%] transition-all duration-500 ${
            hovered ? "-translate-x-3 translate-y-4 rotate-8" : ""
          }`}
        >
          <img src={Jas} alt="Jas" className="w-20 h-20 rounded-full" />
        </div>

        {/* Bottom Right */}
        <div
          className={`w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center absolute bottom-[8%] right-[12%] transition-all duration-500 ${
            hovered ? "translate-x-4 translate-y-2 -rotate-6" : ""
          }`}
        >
          <img src={Ji} alt="Ji" className="w-20 h-20 rounded-full" />
        </div>

        {/* Bottom Left */}
        <div
          className={`w-20 h-20 rounded-full bg-red-100 flex items-center justify-center absolute bottom-[5%] left-[18%] transition-all duration-500 ${
            hovered ? "-translate-x-5 translate-y-3 rotate-2" : ""
          }`}
        >
          <img src={She} alt="She" className="w-20 h-20 rounded-full" />
        </div>

        {/* Center Avatar */}
        <div
          className={`w-40 h-60 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ${
            hovered ? "scale-122" : "scale-145"
          }`}
        >
          <img src={TeamIcon} alt="Team" className="w-26 h-40" />
        </div>
      </div>
    </div>
  );
};

export default FloatingImages;
