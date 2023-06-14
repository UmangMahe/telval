import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { useSelector } from "react-redux";

const Header = () => {
  
  let i = 0;

  const openMenu = () => {
    
    if (i == 0) {
      $(".nav-wrapper").addClass("open");
      $(".line").addClass("animate");
      i = 1;
    } else {
      i = 0;
      $(".nav-wrapper").removeClass("open");
      $(".line").removeClass("animate");
    }
  };

  const {accentColor} = useSelector(state=>state.theme)

  const [style, setStyle] = useState({
      background: "transparent",
      backdropFilter: "blur(70px)",
      transition: '0.75s all ease'
  })

  useEffect(()=>{
   
    setStyle(prev=>({
      ...prev,
      background: accentColor+'65'
    }))

  },[accentColor])

  return (
    <div className="navigation" id="navigation" style={style}>
      <div className="navigation-content">
        <NavLink to="/" end className="logo router-link-exact-active active">
          <img src="/images/logo.png" />
        </NavLink>
        <div onClick={openMenu} className="hamburger-menu">
          <div className="line"></div>
        </div>

        <div className="nav-wrapper">
          <div className="nav-item" id="company">
            <NavLink to="/about">About</NavLink>

            <div className="subnav"></div>
          </div>

          <div className="nav-item" id="solutions">
            <NavLink to="/services">Services</NavLink>

            <div className="subnav"></div>
          </div>

          <div className="nav-item" id="company">
            <NavLink to="/reseller">Reseller</NavLink>

            <div className="subnav"></div>
          </div>

          <div className="nav-item" id="user-cases">
            <NavLink to="/datacenter">Data Center</NavLink>

            <div className="subnav"></div>
          </div>

          <div className="nav-item" id="news">
            <NavLink to="/solutions">Solutions</NavLink>

            <div className="subnav"></div>
          </div>

          <div className="nav-item" id="user-cases">
            <NavLink to="/candidate">Candidates</NavLink>

            <div className="subnav"></div>
          </div>

          <div
            className="nav-item"
            id="contact"
            style={{ paddingRight: "67px" }}
          >
            <NavLink to="/contact">Contact</NavLink>

            <div className="subnav"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
