import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Style from "../assets/styles/nav.module.css";
import Logo from "../assets/imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  });

  const handleMenuToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`${Style.navContainer} ${
        showNav ? Style.navContainerShow : ""
      }`}
    >
      <nav className={Style.nav}>
        <div className={Style.logobar}>
          <a href="/" className={Style.logo}>
            <img src={Logo} alt="logo" />
          </a>
          <div>
            <button onClick={handleMenuToggle}>
              <FontAwesomeIcon
                className={Style.menubarIcon}
                icon={isToggled ? faTimes : faStream}
              />
            </button>
          </div>
        </div>

        <ul
          className={`${Style.navMenu} ${isToggled ? Style.navMenuShow : ""}`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? Style.active : undefined
              }
            >
              HOME
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/privacyPolicy"
              className={({ isActive }) =>
                isActive ? Style.active : undefined
              }
            >
              privacy
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? Style.active : undefined
              }
            >
              ABOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
