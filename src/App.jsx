import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Team from "./pages/Team.jsx";
import Projects from "./pages/Projects.jsx";
import ScrollToTop from "./scrollToTop";
import ShaProfile from "./pages/profile/members/sha.jsx";
import SheProfile from "./pages/profile/members/she.jsx";
import NiksProfile from "./pages/profile/members/niks.jsx";
import JasProfile from "./pages/profile/members/jas.jsx";
import JiProfile from "./pages/profile/members/ji.jsx";
import './index.css';

function App() {
  return (
    <HashRouter>
    <ScrollToTop/>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/members/sha" element={<ShaProfile />} />
          <Route path="/members/she" element={<SheProfile />} />
          <Route path="/members/niks" element={<NiksProfile />} />
          <Route path="/members/jas" element={<JasProfile />} />
          <Route path="/members/ji" element={<JiProfile />} /> 
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
