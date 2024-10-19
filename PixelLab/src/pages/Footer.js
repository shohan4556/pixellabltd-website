import React from "react";
import Style from "../assets/styles/footer.module.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <h1 className={Style.logo}>PixelLab Ltd.</h1>
      <div className={Style.sec1}>
        <div className={Style.left}>
          <p>
            Contact us for business, <br /> cooperation, advertising, …
          </p>
          <div>
            <a className={Style.mail} href="mailto:shohan@pixellabltd.com">
              support@pixellabltd.com
            </a>
            <br />
            <p style={{ color: "white" }}>Email now</p>
          </div>
        </div>
        <div className={Style.line}></div>
        <div className={Style.right}>
          <div>
            <h2 className={Style.mail}>Our Address</h2>
          </div>
          <p>
            Plot. 37, Road 11, Block H, Level 3, Ventura Iconia <br />
            Banani, Dhaka.
          </p>
        </div>
      </div>

      <div className={Style.sec2}>
        <div>
          <a
            href="https://www.linkedin.com/company/pixellab-ltd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div>
          <p>2024. All rights reserved.</p>
          {/* <a href="/privacyPolicy">PRIVACY POLICY</a> */}
          <NavLink to={"/privacyPolicy"}>PRIVACY POLICY</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
