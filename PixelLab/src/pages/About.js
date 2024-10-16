import React from "react";
import Style from "../assets/styles/about.module.css";

const About = () => {
  return (
    <div>
      <main className={Style.main}>
        <h1>ABOUT US</h1>
        <section className={Style.sec2}>
          <p>
            Welcome to PixelLab, a creative and passionate team of game
            developers specializing in 2D games, particularly board games. Our
            expertise lies in crafting engaging and enjoyable experiences for
            players worldwide. With a focus on games like 16 Beads, Cards,
            Solitaire, and Hazari, we aim to bring traditional gaming into the
            modern digital space. Founded by a group of six dedicated
            professionals, PixelLab has successfully published four games on the
            Google Play Store. Our team brings together a diverse set of skills,
            including game design, programming, and creative storytelling, all
            working together to deliver high-quality entertainment.
          </p>
          <h3>Our Mission</h3>
          <p>
            At PixelLab, our mission is to reinvent the classic board game
            experience by combining traditional gameplay with modern technology.
            We are committed to creating fun, accessible, and visually appealing
            games that players of all ages can enjoy.
          </p>
          <h3>What We Do</h3>
          <p>
            Our primary focus is on 2D board games, and we aim to design games
            that are not only entertaining but also bring a sense of nostalgia
            to players. By blending strategy and creativity, we strive to create
            games that stand out in the competitive mobile gaming market.
          </p>
          <h3>Achievements</h3>
          <p>
            With four games already live on the Google Play Store, we continue
            to expand our portfolio and push the boundaries of 2D game
            development. Each of our releases has been crafted with care,
            ensuring both quality and player satisfaction.
          </p>
          <h3>Meet the Team</h3>
          <p>
            PixelLab’s team consists of six talented members, each with a unique
            background in game development, design, and art. Together, we form a
            dynamic group that shares a common vision of creating innovative and
            captivating games.
          </p>
          <h3>Future Goals</h3>
          <p>
            As we continue to grow, PixelLab is focused on expanding our game
            library and exploring new genres while staying true to our passion
            for 2D board games. We look forward to creating more memorable
            gaming experiences for our audience.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
