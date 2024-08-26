import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/constants";
import { mylogo, menu, close,resume } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6">
        <RouterLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={mylogo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer hidden sm:block">
            Hafiz Umair
            <span className="hidden lg:block">Web Developer</span>
          </p>
        </RouterLink>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                active === navLink.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(navLink.title)}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
          {/* Resume Button */}
          <li>
            <a
              href="https://drive.google.com/file/d/1uuOBd4tKelFsYizlirIAHl7M5xY6i0Dx/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#915eff] px-4 py-2 rounded-md hover:bg-[#a186d4] transition-all"
            >
             Resume
            </a>
          </li>
        </ul>
        <div className="sm:hidden flex items-center justify-end">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`${
                    active === navLink.title ? "text-white" : "text-secondary"
                  } cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(navLink.title);
                  }}
                >
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}
       
              <li>
                <a
                  href="https://drive.google.com/file/d/1uuOBd4tKelFsYizlirIAHl7M5xY6i0Dx/view?usp=drive_link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#915eff] px-4 py-2 rounded-md hover:bg-[#a186d4] transition-all"
                >
                 Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
