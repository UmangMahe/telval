import React from "react";
import Content from "../../components/shared-components/Content";
import AboutSection from "./About";
import Team from "./Team";
import Offices from "./Offices";
import { NavLink, Route, Routes } from "react-router-dom";

function About(props) {
  return (
    <Content className="subsection">
      <div className="overlay"></div>

      <div className="nav">
        <h3 className="nav-item">
          <NavLink to="/about" end>
            About
          </NavLink>
        </h3>

        <h3 className="nav-item">
          <NavLink to="/about/team" end>
            Team
          </NavLink>
        </h3>

        <h3 className="nav-item">
          <NavLink to="/about/offices" end>
            Offices
          </NavLink>
        </h3>
      </div>

      <Routes>
        <Route index element={<AboutSection />} />
        <Route path="team" element={<Team />} />
        <Route path="offices" element={<Offices />} />
      </Routes>
    </Content>
  );
}

export default About;
