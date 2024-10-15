import React from "react";
import Style from "../assets/styles/footer.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <h1 className={Style.logo}>PixelLab Ltd.</h1>
      <div className={Style.sec1}>
        <div className={Style.left}>
          <p>
            Contact us for sale, <br />
            business, cooperation, advertising, …
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
          <p>
            We are hiring IT and <br /> gaming professionals from Asia.
          </p>
          <div>
            <h2 className={Style.mail}>We are hiring</h2>
            <a className={Style.tel} href="/contact">
              Contact
            </a>
          </div>
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
          {/* <a href="#">PRIVACY POLICY</a> <br /> */}
          {/* <NavLink to="/privacyPolicy">PRIVACY POLICY</NavLink> */}
          <a href="/privacyPolicy">PRIVACY POLICY</a>
          <br />
          <a href="#">COOKIES</a>
          <p>Created with passion.</p>
        </div>
      </div>
      {/* <small>T_anjid</small> */}
    </footer>
  );
};

export default Footer;
