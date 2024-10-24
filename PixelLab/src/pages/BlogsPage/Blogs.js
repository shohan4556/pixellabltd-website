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
      description: "Test your skills with Shologuti!",
    },
    {
      id: 2,
      title: "Hazari Gold",
      gameLogo: hazariIcon,
      description: "Play the strategic card game Hazari.",
    },
    {
      id: 3,
      title: "Grand Solitaire",
      gameLogo: solitaireIcon,
      description: "Classic Solitaire fun!",
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
