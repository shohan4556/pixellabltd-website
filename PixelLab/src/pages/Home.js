import React from "react";
import Style from "../assets/styles/home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TypingEffect from "../comps/TypingEffect";

import Bg from "../assets/imgs/bg.png";
import Bg2 from "../assets/imgs/bg2.png";
import Bg3 from "../assets/imgs/bg3.png";
import Bg4 from "../assets/imgs/team.jpeg";
import Cards from "../assets/imgs/cards.png";
import Hazari from "../assets/imgs/hazari.jpg";
import Solitaire from "../assets/imgs/solitaire.png";
import SholoGuti from "../assets/imgs/16Guti.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faHtml5,
  faUnity,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
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
    nextArrow: <button className="next">Next</button>,
    prevArrow: <button className="prev">Prev</button>,
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
          <button className={Style.btn}>CONTACT</button>
        </div>

        <Slider {...settings} className={Style.slider}>
          <div className={Style.slide}>
            <img src={Bg} alt="" />
          </div>
          <div className={Style.slide}>
            <img src={Bg2} alt="" />
          </div>
          <div className={Style.slide}>
            <img src={Bg3} alt="" />
          </div>
        </Slider>
      </section>

      <main className={Style.main}>
        <section className={Style.sec2}>
          <h2>
            Hi.. We are team PixelLab, a dynamic game development company,
            crafting immersive and innovative games with a passion for
            creativity and cutting-edge technology. Their talented team delivers
            exceptional gaming experiences across various platforms.
          </h2>
          <a href="#">
            <p>Read about us</p>
            <p>⇾</p>
          </a>
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
              But we’re always looking for new people to help us <br /> make our
              games even better
            </p>
            <button>CONTACT</button>
          </div>
        </section>

        <section className={Style.sec4}>
          <h1>OUR GAMES</h1>

          <Slider {...gameSliderSettings} className={Style.gameSlider}>
            <div className={Style.slide}>
              <a href="#">
                <img src={Cards} alt="" />
              </a>
            </div>
            <div className={Style.slide}>
              <a href="#">
                <img src={Solitaire} alt="" />
              </a>
            </div>
            <div className={Style.slide}>
              <a href="#">
                <img src={Hazari} alt="" />
              </a>
            </div>
            <div className={Style.slide}>
              <a href="#">
                <img src={SholoGuti} alt="" />
              </a>
            </div>
          </Slider>
        </section>
      </main>
    </div>
  );
};

export default Home;
