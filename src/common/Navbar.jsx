import React, { useState } from "react";
import MarginWrapper from "./MarginWrapper";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  const [menu, setMenu] = useState(false);

  const handleNavbar = () => {
    setHamburger(!hamburger);
    setMenu(!menu);
  };

  return (
    <nav className="bg-background z-10 fixed top-0 font-fraunceus text-2xl w-full">
      <MarginWrapper>
        <div className="flex justify-between items-center">
          <Link to={'/'}><img
            src="/assets/avoron_logo_website.svg"
            className="w-24 "
            alt="logo"
          /></Link>
          <ul className="sm:flex justify-between items-center gap-10 hidden">
            <Link to={'products'}><li>Shop</li></Link>
            <Link to={'about'}><li>About Us</li></Link>
            <Link to={'contact'}><li>Contact</li></Link>
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
              <Link to={'/'}><li className="cursor-pointer">Home</li></Link>
              <Link to={'products'}><li className="cursor-pointer">Shop</li></Link>
              <Link to={'about'}><li className="cursor-pointer">About Us</li></Link>
              <Link to={'contact'}><li className="cursor-pointer">Contact</li></Link>
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
