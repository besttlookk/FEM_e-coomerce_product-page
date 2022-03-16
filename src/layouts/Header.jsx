import React, { useContext, useState } from "react";
import { ReactComponent as HamBurgerMenu } from "../images/icon-menu.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import NavBar from "./NavBar";
import { AppContext } from "../contexts/appContext";
import SideMenu from "./SideMenu";
import Dropdown from "../components/Dropdown";

const Header = () => {
  const { state } = useContext(AppContext);

  const [isSideMenuActive, setIsSideMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  // for smaller screens
  const handleMenuClick = () => {
    setIsSideMenuActive(true);
  };

  return (
    <header className="border-b border-gray-200">
      {/* SIDEMENU for smaller screen */}

      <SideMenu
        setIsSideMenuActive={setIsSideMenuActive}
        isSideMenuActive={isSideMenuActive}
      />

      {/* HEADER WRAPPER */}
      <div className="relative flex items-center justify-between px-6 py-6 md:py-0">
        {/* CART DROPDOWN */}
        {dropdownActive && <Dropdown />}
        {/* HEADER LEFT SECTION STARTS */}
        <div className="flex items-center ">
          {/* hamburger menu for small screens */}
          <HamBurgerMenu
            className="mr-4 md:hidden text-secondary-dark hover:rotate(180deg) transform transition cursor-pointer"
            onClick={handleMenuClick}
          />
          <Logo className="scale-90 text-secondary-dark trasnform" />
          {/* nav menu for larger screen */}
          <NavBar />
        </div>

        {/* HEADER RIGHT SECTION STARTS */}
        <div className="flex items-center ">
          {/* Cart icon */}
          <div
            className="relative cursor-pointer"
            onClick={() => setDropdownActive((prev) => !prev)}
          >
            <Cart className="" />
            <div className="absolute flex items-center justify-center w-5 h-5 p-2 text-white rounded-full -top-2 -right-2 bg-primary">
              <span className="text-xs font-bold">
                {state.reduce((acc, item) => {
                  return item.quantity * 1 + acc;
                }, 0)}
              </span>
            </div>
          </div>
          <div className="w-8 h-8 ml-6 border-2 rounded-full cursor-pointer border-primary">
            <img alt="avatar" src={avatar} className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
