import React from "react";
// import Style from "../assets/styles/blogs.module.css";
import Style from "../../assets/styles/blogs.module.css";
import { Link } from "react-router-dom";

import shologutiIcon from "../../assets/imgs/blogs/shologuti/shologutiIcon.png";
import hazariIcon from "../../assets/imgs/blogs/hazari/hazariIcon.png";
import solitaireIcon from "../../assets/imgs/blogs/solitaire/solitaireIcon.png";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "16 Guti Pro",
      gameLogo: shologutiIcon,
      description:
        "Sholo Guti - ষোল গুটি (১৬ গুটি) is the most popular বোর্ড গেম in India, Bangladesh, Pakistan and in SouthEast Asia. Bead 16, also known as ষোল গুটি খেলা, is a two-player strategy board খেলা similar to draughts and alquerque (qirkat)",
    },
    {
      id: 2,
      title: "Hazari Gold",
      gameLogo: hazariIcon,
      description:
        "Play the strategic card game Hazari. Hazari Gold, enjoy the ultimate card gaming experience on your Android device. Hazari Gold offers the classic hazari (হাজারী) experience with awesome graphics. It also include Kitti (Nine Cards) Game. Start your card game journey with Hazari Gold (1000 points game).",
    },
    {
      id: 3,
      title: "Grand Solitaire",
      gameLogo: solitaireIcon,
      description:
        "Grand solitaire is the collection of your Classic Solitaire(also known as Klondike Solitaire) and Spider (spiderette) Solitaire card games in one app. You will get the grand feeling of the original Spider Solitaire, and Classic Klondike Solitaire (FreeCell Solitaire) game in our collection app.",
    },
  ];

  return (
    <div>
      <main className={Style.main}>
        <h1>OUR BLOGS</h1>

        <ul>
          {blogs.map((blog) => {
            return (
              <li className={Style.blog} key={blog.id}>
                <div className={Style.left}>
                  <div>
                    <img src={blog.gameLogo} alt={blog.title} />
                    <h2>{blog.title}</h2>
                  </div>
                  {blog.content}
                  <p>{blog.description}</p>
                </div>
                <Link to={`/blogs/${blog.id}`}>Read more</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Blogs;
