import React, { useState } from "react";
import Style from "../assets/styles/comps/goTop.module.css";
// import GoUp from "../assets/imgs/arrowUp.png";

const GoTop = () => {
  const [btnShow, setBtnShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setBtnShow(true);
    } else {
      setBtnShow(false);
    }
  });

  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={handleGoTop}
        className={`${Style.goTopBtn} ${btnShow ? Style.goTopBtnShow : ""}`}
      >
        ⇪
      </button>
      {/* className={`${Style.navMenu} ${isToggled ? Style.navMenuShow : ""}`} */}
    </div>
  );
};

export default GoTop;
