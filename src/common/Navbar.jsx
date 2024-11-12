import React, { useState } from "react";
import MarginWrapper from "./MarginWrapper";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  const [menu, setMenu] = useState(false);

  const handleNavbar = () => {
    setHamburger(!hamburger);
    setMenu(!menu);
  };

  return (
    <nav className="bg-background z-10 fixed font-fraunceus text-2xl w-full">
      <MarginWrapper>
        <div className="flex justify-between items-center">
          <img
            src="/assets/avoron_logo_website.svg"
            className="w-24 "
            alt="logo"
          />
          <ul className="sm:flex justify-between items-center gap-10 hidden">
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <div
            onClick={handleNavbar}
            className="sm:hidden block cursor-pointer"
          >
            {hamburger && <RxHamburgerMenu size="40px" />}
          </div>
        </div>
      </MarginWrapper>

      <section
        className={`duration-300 ${
          menu ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 left-0 right-0 h-full w-full bg-background z-20 transition-transform ease-in-out`}
      >
        <MarginWrapper>
          <div className="flex justify-between mt-8">
            <ul onClick={handleNavbar} className="h3 flex flex-col gap-6 mt-36 ">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
            <div className="cursor-pointer">
              <RxCross1 size={"40px"} onClick={handleNavbar} />
            </div>
          </div>
        </MarginWrapper>
      </section>

      {menu && <div className=""></div>}
    </nav>
  );
};

export default Navbar;
