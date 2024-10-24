import React from "react";
import Style from "../../assets/styles/blogPost.module.css";
import { useParams } from "react-router-dom";

import shologutiIcon from "../../assets/imgs/blogs/shologuti/shologutiIcon.png";
import hazariIcon from "../../assets/imgs/blogs/hazari/hazariIcon.png";
import solitaireIcon from "../../assets/imgs/blogs/solitaire/solitaireIcon.png";

const BlogPost = () => {
  const { id } = useParams();

  const blogDetails = {
    1: {
      title: "16 Guti Pro",
      description:
        "💥 Sholo Guti - ষোল গুটি (১৬ গুটি) is the most popular বোর্ড গেম in India, Bangladesh, Pakistan and in SouthEast Asia. Bead 16, also known as ষোল গুটি খেলা, is a two-player strategy board খেলা similar to draughts and alquerque (qirkat). In this game, players hop over each other's pieces to capture them.In 🇧🇩 Bangladesh the game known as 16 গুটি খেলা, 12 গুটি গেম or বাঘ বন্দি খেলা. In India 🇮🇪 the sholo guti game known as বাঘ বকরি গেমস, bara tehni, 16 kaati, 16 kati, 16 Goti or tigers and goats kehla. In other regions sholo guti known as bara tehni, bagh bakri khela, or baghchal and even some people call it the bakhshali game. In other parts of the world it is known as sixteen soldiers, bead puzzle or baitsa game.শুল গুটি গেমস is very similar to most known board games like Chess and Checkers. Anyone can play bead 16 (ষোল গুটি খেলার সফটওয়্যার) অফলাইন and with friends in local multiplayer or online multiplayer.",
      imageUrl: shologutiIcon,
    },
    2: {
      title: "Hazari Gold",
      description:
        "(হাজারী) Hazari Gold, enjoy the ultimate card gaming experience on your Android device. Hazari Gold offers the classic hazari (হাজারী) experience with awesome graphics. It also include Kitti (Nine Cards) Game. Start your card game journey with Hazari Gold (1000 points game). Hazari Gold offers a royal hazari gaming experience that no game can provide.",
      imageUrl: hazariIcon,
    },
    3: {
      title: "Grand Solitaire",
      description:
        "Grand solitaire is the collection of your ✅ Classic Solitaire(also known as Klondike Solitaire) and ✅ Spider (spiderette) Solitaire card games in one app. You will get the grand feeling of the original Spider Solitaire, and Classic Klondike Solitaire (FreeCell Solitaire) game in our collection app.There are many variations of solitaire Like Spider solitaire, Spiderette, mahjong solitrair, Klondike or pyramid solitaire The Grand Solitaire game designed by PixelLab is the original and most fun to play and It is totally free!. For years Solitaire has been loved by millions of players. If you like Patience card games you are gonna love our Grand Solitaire Collection game. Spider solitaire or spiderette(pasians pauk) solitaire is one of the most popular and most known games in the world first introduced by microsoft. Now available for FREE and Offline. Once you download our Grand Solitaire you will have a collection of 2 Solitrair game FreeCell 2 deck Solitaire and Spider solitaire card games on your phone !. You can play our Solitaire Collection game Offline !! In our Offline FreeCell Solitaire and Spiderette solitra card game you will have different card style, background and card back. To unlock those card themes for FreeCell! Online card games you have to enable io/internet and watch ads that will have your unlocked card theme, captivating, romantic card background will add in your solitaire card puzzle game.",
      imageUrl: solitaireIcon,
    },
  };

  const blog = blogDetails[id] || {
    title: "Not found",
    description: "No game details available for this",
    imageUrl: "",
  };

  return (
    <div>
      <main className={Style.main}>
        <div>
          <img src={blog.imageUrl} alt={blog.title} />
          <h2>{blog.title}</h2>
        </div>

        <p>{blog.description}</p>
      </main>
    </div>
  );
};

export default BlogPost;
