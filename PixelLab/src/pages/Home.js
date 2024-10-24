import React from "react";
import Style from "../assets/styles/home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TypingEffect from "../comps/TypingEffect";

import Bg4 from "../assets/imgs/pixelLabTeam.jpeg";
import Cards from "../assets/imgs/cards.png";
import Hazari from "../assets/imgs/hazari.jpg";
import Solitaire from "../assets/imgs/solitaire.png";
import SholoGuti from "../assets/imgs/16Guti.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faHtml5,
  faUnity,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const takeToTheFooter = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };
  const gameSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // nextArrow: <button className="next">Next</button>,
    // prevArrow: <button className="prev">Prev</button>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className={Style.sec1}>
        <div className={Style.contentOverlay}>
          <TypingEffect />

          <button onClick={takeToTheFooter} className={Style.btn}>
            CONTACT
          </button>
        </div>

        <Slider {...settings} className={Style.slider}>
          <div className={Style.slide}>
            <img src={Cards} alt="" />
          </div>
          <div className={Style.slide}>
            <img src={SholoGuti} alt="" />
          </div>
          <div className={Style.slide}>
            <img src={Solitaire} alt="" />
          </div>
        </Slider>
      </section>

      <main className={Style.main}>
        <section className={Style.sec2}>
          <h2>
            Hello! We are PixelLab, a dynamic game development company
            specializing in the creation of engaging board and card games. With
            a passion for creativity and cutting-edge technology, our talented
            team crafts immersive and innovative gaming experiences tailored to
            these genres.
          </h2>
          <Link to="/about">
            <p>Read about us</p>
            <p>››</p>
          </Link>
          {/* <button onClick={() => navigate("/about")}>
            <p>Read about us</p>
            <p>››</p>
          </button> */}
        </section>

        <section className={Style.sec5}>
          <div>
            <FontAwesomeIcon icon={faUnity} />
            <FontAwesomeIcon icon={faAndroid} />
            <FontAwesomeIcon icon={faHtml5} />
          </div>
        </section>

        <section className={Style.sec3}>
          <div>
            <img src={Bg4} alt="" />
          </div>
          <div>
            <h1>Our team has all it takes to create awesome games</h1>
            <p>
              Got Some Crazy Idea? <br /> Contact with us
            </p>

            <button onClick={takeToTheFooter}>CONTACT</button>
          </div>
        </section>

        <section className={Style.sec4}>
          <h1>OUR GAMES</h1>

          <Slider {...gameSliderSettings} className={Style.gameSlider}>
            <div className={Style.slide}>
              <a
                href="https://play.google.com/store/apps/details?id=com.pixellab.solitaire.classic.klondike&hl=en"
                target="_blank"
                rel="noopener & noreferrer"
              >
                <img src={Solitaire} alt="" />
              </a>
            </div>
            <div className={Style.slide}>
              <a
                href="https://play.google.com/store/apps/details?id=com.pixellab.hazari.card.game&hl=en"
                target="_blank"
                rel="noopener & noreferrer"
              >
                <img src={Hazari} alt="" />
              </a>
            </div>
            <div className={Style.slide}>
              <a
                href="https://play.google.com/store/apps/details?id=com.pixellab.shologuti.offline.bead16.damro&hl=en"
                target="_blank"
                rel="noopener & noreferrer"
              >
                <img src={SholoGuti} alt="" />
              </a>
            </div>
            <div className={Style.slide}>
              <a href="#">
                <img src={Cards} alt="" />
              </a>
            </div>
          </Slider>
        </section>
      </main>
    </div>
  );
};

export default Home;
