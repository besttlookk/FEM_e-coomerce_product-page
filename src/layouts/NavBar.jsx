import React from "react";

const NavBar = () => {
  return (
    <nav className="hidden ml-10 md:block">
      <ul className="flex items-center space-x-6">
        <li>
          <a href="/" className="navLink">
            Collections
          </a>
        </li>
        <li>
          <a href="/" className="navLink">
            Men
          </a>
        </li>
        <li>
          <a href="/" className="navLink">
            Women
          </a>
        </li>
        <li>
          <a href="/" className="navLink">
            About
          </a>
        </li>
        <li>
          <a href="/" className="navLink">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
