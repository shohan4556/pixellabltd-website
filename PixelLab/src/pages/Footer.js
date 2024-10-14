import React from "react";
import Style from "../assets/styles/footer.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
            <a className={Style.mail} href="mailto:sales@inlogic.sk">
              sales@inlogic.sk
            </a>
            <br />
            <a className={Style.tel} href="tel:+0123456789">
              +0123456789
            </a>
          </div>
        </div>
        <div className={Style.line}></div>
        <div className={Style.right}>
          <p>
            We are hiring IT and <br /> gaming professionals from Slovakia
          </p>
          <div>
            <h2 className={Style.mail}>We are hiring</h2>
            <a className={Style.tel} href="#">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className={Style.sec2}>
        <div>
          {/* <a href="">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="">
            {" "}
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="">
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </a> */}
          <a href="">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div>
          <p>2024. All rights reserved.</p>
          <a href="#">PRIVACY POLICY</a> <br />
          <a href="#">COOKIES</a>
          <p>Created with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
