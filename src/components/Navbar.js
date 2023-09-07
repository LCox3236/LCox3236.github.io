import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  // {
  //     name: info.initials,
  //     type: 'initials',
  //     to: '/',
  //     active: 'home'
  // },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
];

export default function Navbar() {
  return (
    <div id="navbar-container">
      <div id="navbar-links">
        {links.map((link, index) => (
          <div>
            <Link className="navbar-link" to={link.to}>
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <p>Dark Mode</p>
    </div>
  );
}
