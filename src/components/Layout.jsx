// components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import BgImage from '../assets/bg.png';


const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Foreground: Navbar and routed page */}
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
