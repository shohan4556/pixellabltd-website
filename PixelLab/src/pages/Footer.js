import React from "react";
import Style from "../assets/styles/footer.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <h1 className={Style.logo}>PixelLab Ltd</h1>
      <div className={Style.sec1}>
        <div className={Style.left}>
          {/* <p>
            Contact us for business, <br /> cooperation, advertising, …
          </p> */}
          <div>
            <h2 className={Style.mail}>Contact</h2>
            <p>shohan@pixellabltd.com</p>
            {/* <br />
            <p style={{ color: "white" }}>Email now</p> */}
          </div>
        </div>
        <div className={Style.line}></div>
        <div className={Style.right}>
          <div>
            <h2 className={Style.mail}>Address</h2>
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
          <p>2025. All rights reserved.</p>
          <Link to="/privacy">PRIVACY POLICY</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
