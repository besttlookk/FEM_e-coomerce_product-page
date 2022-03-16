import React from "react";
import { Overlay } from "../components";
import { ReactComponent as CancleIcon } from "../images/icon-close.svg";

const SideMenu = ({ setIsSideMenuActive, isSideMenuActive }) => {
  const handleCancelClick = () => {
    setIsSideMenuActive(false);
  };
  return (
    <>
      {/* Overlay */}
      {isSideMenuActive && <Overlay onClick={handleCancelClick} />}
      <div
        className={`absolute top-0 bottom-0 left-0 z-50 w-3/5 bg-white md:hidden  sidemenu ${
          isSideMenuActive ? "active" : ""
        }`}
      >
        <CancleIcon
          className="absolute transform cursor-pointer top-8 left-8 hover:text-secondary-dark hover:scale-110"
          onClick={handleCancelClick}
        />
        <nav className="mt-28">
          <ul className="font-bold text-secondary-dark">
            <li>
              <a href="/" className="inline-block px-8 py-4">
                Collections
              </a>
            </li>
            <li>
              <a href="/" className="inline-block px-8 py-4">
                Men
              </a>
            </li>
            <li>
              <a href="/" className="inline-block px-8 py-4">
                Women
              </a>
            </li>
            <li>
              <a href="/" className="inline-block px-8 py-4">
                About
              </a>
            </li>
            <li>
              <a href="/" className="inline-block px-8 py-4">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
