import React from "react";
import Style from "../../assets/styles/blogPost.module.css";
import { useParams } from "react-router-dom";

import shologutiIcon from "../../assets/imgs/blogs/shologuti/shologutiIcon.png";
import sholoGutiSS1 from "../../assets/imgs/blogs/shologuti/Screen-shot-01.png";
import sholoGutiSS2 from "../../assets/imgs/blogs/shologuti/Screen_shot_07_bangla.png";
import sholoGutiSS3 from "../../assets/imgs/blogs/shologuti/Screen_shot_8_bangla.png";
import sholoGutiSS4 from "../../assets/imgs/blogs/shologuti/Screen_shot_09_bangla.png";
//
import hazariIcon from "../../assets/imgs/blogs/hazari/hazariIcon.png";
import hazariSS1 from "../../assets/imgs/blogs/hazari/Scn_02.png";
import hazariSS2 from "../../assets/imgs/blogs/hazari/Scn_03.png";
import hazariSS3 from "../../assets/imgs/blogs/hazari/Scn_9cards.png";
import hazariSS4 from "../../assets/imgs/blogs/hazari/Scn_9cards (1).png";
//
import cardKingIcon from "../../assets/imgs/blogs/solitaire/solitaireIcon.png";
import cardKingSS1 from "../../assets/imgs/blogs/cardKing/cardKingSS1.png";
import cardKingSS2 from "../../assets/imgs/blogs/cardKing/cardKingSS2.png";
import cardKingSS3 from "../../assets/imgs/blogs/cardKing/cardKingSS3.png";
import cardKingSS4 from "../../assets/imgs/blogs/cardKing/cardKingSS4.png";

//
import solitaireIcon from "../../assets/imgs/blogs/solitaire/solitaireIcon.png";
import solitaireSS1 from "../../assets/imgs/blogs/solitaire/solitaire1.png";
import solitaireSS2 from "../../assets/imgs/blogs/solitaire/solitaire2.png";
import solitaireSS3 from "../../assets/imgs/blogs/solitaire/solitaire3.png";
import solitaireSS4 from "../../assets/imgs/blogs/solitaire/solitaire4.png";

import Slider from "react-slick";

const BlogPost = () => {
  const { id } = useParams();

  const gameSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogDetails = {
    1: {
      title: "16 Guti Pro",
      content: (
        <div className={Style.gameDesc}>
          <section>
            <p>
              Sholo Guti - ষোল গুটি (১৬ গুটি) is the most popular বোর্ড গেম in
              India, Bangladesh, Pakistan and in SouthEast Asia. Bead 16, also
              known as ষোল গুটি খেলা, is a two-player strategy board খেলা
              similar to draughts and alquerque (qirkat). In this game, players
              hop over each others pieces to capture them.
            </p>
            <p>
              In 🇧🇩 Bangladesh the game known as 16 গুটি খেলা, 12 গুটি গেম or
              বাঘ বন্দি খেলা. In India 🇮🇪 the sholo guti game known as বাঘ বকরি
              গেমস, bara tehni, 16 kaati, 16 kati, 16 Goti or tigers and goats
              kehla. In other regions sholo guti known as bara tehni, bagh bakri
              khela, or baghchal and even some people call it the bakhshali
              game. In other parts of the world it is known as sixteen soldiers,
              bead puzzle or baitsa game. শুল গুটি গেমস is very similar to most
              known board games like Chess and Checkers. Anyone can play bead 16
              (ষোল গুটি খেলার সফটওয়্যার) অফলাইন and with friends in local
              multiplayer or online multiplayer.
            </p>
          </section>
          <section>
            <h3>Rules</h3>
            <p>
              আমাদের ১৬ গুটি Pro game rules are simple, players have to capture
              all the other player’s pieces (16 গুটি /bead/pieces) in order to
              win.
            </p>
          </section>
          <section>
            <h3>Features we offer:</h3>
            <p>Local Multiplayer Offline(2 Players Game):</p>
            <ul>
              <li>Play with your friends as an opponent,</li>
              <li>
                No need for the internet, Just enjoy your time with your friend
                Anywhere & Anytime !
              </li>
            </ul>

            <p>Single Player:</p>
            <ul>
              <li>Play with computer,</li>
              <li>
                Beat our best Computer BOT, Only the best player will win.
              </li>
              <li>3 levels of difficulties (Easy, Medium & Hard).</li>
            </ul>

            <p>Online Multiplayer:</p>
            <ul>
              <li>Play online with other players,</li>
              <li>Make friends</li>
            </ul>

            <p>
              we are Pixellab Ltd, we are promised to deliver best gaming
              experience. Keep your eyes on our playstore page to get latest
              update.
            </p>
          </section>
        </div>
      ),
      imageUrl: shologutiIcon,
      gamePlayImgs: [sholoGutiSS1, sholoGutiSS2, sholoGutiSS3, sholoGutiSS4],
    },
    2: {
      title: "Hazari Gold",
      content: (
        <div className={Style.gameDesc}>
          <section>
            <p>
              (হাজারী) Hazari Gold, enjoy the ultimate card gaming experience on
              your Android device. Hazari Gold offers the classic hazari
              (হাজারী) experience with awesome graphics. It also include Kitti
              (Nine Cards) Game. Start your card game journey with Hazari Gold
              (1000 points game). Hazari Gold offers a royal hazari gaming
              experience that no game can provide.
            </p>
          </section>
          <section>
            <h3>Game Features</h3>
            <ul>
              <li>play hazari gold offline</li>
              <li> challenging AI when you play with computer</li>
              <li>play Kitti (9 cards) offline</li>
              <li>Game Statistics where you can save your progress</li>
              <li>Spin Wheel to get coins</li>
              <li>Auto card sorting</li>
              <li>Awesome avatar with player profile</li>
              <li> Smooth and HD graphics</li>
            </ul>
            <p>
              Hazari tash khela (তাস খেলা) is popular in bangladesh and India
              region. In India it is called hazarika khel. Some of them called
              it ১০০০ পয়েন্টের খেলা।
            </p>
          </section>
          <section>
            <h3>Rules</h3>
            <p>
              Hazari tash game is an online card game designed for four players
              and uses a standard 52-card deck.
            </p>
            <p>
              In our Hajari card game, the card rankings within each suit
              descend as follows: A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2. Aces,
              Kings, Queens, Jacks, and Tens each carry a value of 10 points,
              while the numeral cards 2 through 9 are valued at 5 points each.
              The cumulative point value of a standard deck is 360. Both dealing
              and gameplay proceed in a counter-clockwise direction.
            </p>
          </section>
          <section>
            <p>
              ✔ Troy : Troy refers to Trio. A set of three cards of the same
              rank (e.g., 7♠, 7♣, 7♦). 30 points (e.g., Q♥, Q♣, Q♦). A-A-A is
              the highest and 2-2-2 is the lowest.
            </p>
            <p>
              ✔ Run : Three cards of consecutive rank, not all of the same suit.
              The highest-ranking Run is A-K-Q, followed by A-2-3, then K-Q-J,
              and so on. A-K-Q (highest), A-2-3, K-Q-J, and so on, down to 4-3-2
              (lowest).
            </p>
            <p>
              ✔ Color: A Color consists of three cards within the same suit that
              do not form a Run. When determining the higher Color, the highest
              card is compared first. If the highest cards are identical, the
              second-highest card is compared, and if those are also the same,
              the lowest card is the deciding factor. For instance, J-9-2
              outranks J-8-7 because 9 is higher than 8. The highest possible
              Color is A-K-J of the same suit, while the lowest is 5-3-2.
            </p>
            <p>
              ✔ Color Run : Three consecutive cards of the same suit. Ace can be
              used in a run of A-K-Q which is the highest, or A-2-3 which is the
              second highest. Below A-2-3 comes K-Q-J, then Q-J-10 and so on
              down to 4-3-2, which is the lowest color Run.
            </p>
            <p>
              ✔ Pair : Any pair of cards from any group. A-A-K (highest) to
              2-2-3 (lowest).
            </p>
          </section>
          <section>
            <h3>Scoring</h3>
            <p>The game continues until a player reaches 1000 points.</p>
            <p>
              We are Pixellab Ltd, we are promised to deliver the best gaming
              experience. Keep your eyes on our playstore page to get the latest
              update.
            </p>
          </section>
        </div>
      ),
      imageUrl: hazariIcon,
      gamePlayImgs: [hazariSS1, hazariSS2, hazariSS3, hazariSS4],
    },
    3: {
      title: "Card King: 6 in 1 Card Games",
      content: (
        <div className={Style.gameDesc}>
          <section>
            <p>
              Play popular Indian card games offline for free! Enjoy Callbreak
              (Lakdi), Hazari, Kitti (Brag), Callbridge, Spades, and Hearts in
              one app. Download now to play 6 classic card games anytime,
              anywhere!. Enjoy 6 offline indian card games in 1 pack. All the
              indian card games are free to play !
            </p>
          </section>
          <section>
            <h3>Key Features</h3>
            <ul>
              <li>Play 6 popular Indian card games in one app</li>
              <li>Offline gameplay – enjoy card games without internet</li>
              <li>Realistic AI opponents for an authentic experience</li>
              <li>Spin the daily bonus wheel and collect rewards</li>
              <li>Full HD graphics and customizable tables</li>
              <li>Regular hourly bonuses to keep the game going</li>
              <li>Easy card sorting and player profile customization</li>
              <li>No real-money gambling – pure fun card games !</li>
            </ul>
          </section>
          <section>
            <h3>Card Games: </h3>
            <ul>
              <li>Callbreak or Lakdi (लकड़ी)</li>
              <li>Hazari (হাজারী)</li>
              <li>Kitti, 9 cards (Brag)</li>
              <li>Callbridge</li>
              <li>Hearts</li>
              <li>Spades</li>
            </ul>
          </section>
          <section>
            <h3>Callbreak (Lakdi):</h3>
            <p>
              Callbreak, also known as Lakdi, is a popular Indian card game
              played with 4 players and a standard 52-card deck. Each player
              gets 13 cards, and spades act as trump cards. Win tricks to score
              points in this addictive offline card game!
            </p>
          </section>
          <section>
            <h3>hazari:</h3>
            <p>
              Hazari (হাজারী) is a strategic card game where players compete to
              score points based on card rankings. Each suit’s ranks range from
              Ace to 2, with different points assigned. Play counterclockwise
              and see who can reach the highest score in this exciting Indian
              card game.
            </p>
          </section>
          <section>
            <h3>Kitti (9 cards, Brag):</h3>
            <p>
              Kitti (Brag) is a unique 9-card game where players arrange cards
              into sets and compete for the highest show. Play with 2-5 players
              and win consecutive rounds to become the champion of this offline
              tash game.
            </p>
          </section>
          <section>
            <h3>callbridge:</h3>
            <p>
              Callbridge is similar to Callbreak. Each player matches the suit
              if possible, and spades serve as trump cards. Reach 13 points
              first to win in this challenging game of strategy and skill.
            </p>
          </section>
          <section>
            <h3>hearts:</h3>
            <p>
              "Hearts, also known as Black Queen or Rickety Kate, is a
              trick-taking game where players aim to avoid collecting certain
              cards. Simple to learn, difficult to master!
            </p>
          </section>
          <section>
            <h3>Spades Classic (Batak):</h3>
            <p>
              Spades is a classic trick-taking card game where spades are the
              trump suit. Players compete to win tricks and reach the highest
              score in this timeless game.
            </p>
          </section>
          <section>
            <p>
              Download now to play the best offline Indian card games anytime,
              anywhere! We’re working on adding even more card games and
              introducing multiplayer modes, including offline hotspot
              multiplayer and online multiplayer. Soon, you’ll be able to enjoy
              Callbreak, Hazari, Kitti, Hearts, and Spades with friends and
              family!"
            </p>
          </section>
        </div>
      ),
      imageUrl: cardKingIcon,
      gamePlayImgs: [cardKingSS1, cardKingSS2, cardKingSS3, cardKingSS4],
    },
    4: {
      title: "Grand Solitaire",
      content: (
        <div className={Style.gameDesc}>
          <section>
            <p>
              Grand solitaire is the collection of your Classic Solitaire(also
              known as Klondike Solitaire) and Spider (spiderette) Solitaire
              card games in one app. You will get the grand feeling of the
              original Spider Solitaire, and Classic Klondike Solitaire
              (FreeCell Solitaire) game in our collection app.
            </p>
            <p>
              There are many variations of solitaire Like Spider solitaire,
              Spiderette, mahjong solitrair, Klondike or pyramid solitaire The
              Grand Solitaire game designed by PixelLab is the original and most
              fun to play and It is totally free!. For years Solitaire has been
              loved by millions of players. If you like Patience card games you
              are gonna love our Grand Solitaire Collection game.
            </p>
            <p>
              Spider solitaire or spiderette(pasians pauk) solitaire is one of
              the most popular and most known games in the world first
              introduced by microsoft. Now available for FREE and Offline. Once
              you download our Grand Solitaire you will have a collection of 2
              Solitrair game FreeCell 2 deck Solitaire and Spider solitaire card
              games on your phone !. You can play our Solitaire Collection game
              Offline !!
            </p>
            <p>
              In our Offline FreeCell Solitaire and Spiderette solitra card game
              you will have different card style, background and card back. To
              unlock those card themes for FreeCell! Online card games you have
              to enable io/internet and watch ads that will have your unlocked
              card theme, captivating, romantic card background will add in your
              solitaire card puzzle game.
            </p>
          </section>
          <section>
            <h3>Highlights: </h3>
            <ul>
              <li>Play Solitaire collection game for FREE</li>
              <li>Enjoy classic FreeCell solitaire card game for FREE</li>
              <li>Play Spider(spiderette) solitaire card game for FREE</li>
              <li>Play Offline !</li>
              <li>Smart hints</li>
              <li>Unlimited undo</li>
              <li>Game Statistics</li>
              <li>Customize your themes !</li>
              <li>Gorgeous high resolution graphics</li>
              <li>Play Offline card puzzle</li>
              <li>Auto play</li>
              <li>Offline spiele kartenspiele</li>
              <li>Play classic original solitaire</li>
              <li>Clean game UI and Modern Style</li>
              <li>Train your brain with a relaxing card puzzle !</li>
            </ul>
            <p>Enjoy the most addictive, relaxing Card Puzzle game !</p>
          </section>
        </div>
      ),
      imageUrl: solitaireIcon,
      gamePlayImgs: [solitaireSS1, solitaireSS2, solitaireSS3, solitaireSS4],
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
        <div className={Style.logoTitle}>
          <img src={blog.imageUrl} alt={blog.title} />
          <h2>{blog.title}</h2>
        </div>

        <div className={Style.gameGallery}>
          {blog.gamePlayImgs && (
            <Slider {...gameSliderSettings} className={Style.gameSlider}>
              {blog.gamePlayImgs.map((img, index) => (
                <div key={index} className={Style.slide}>
                  <img src={img} alt={blog.title} />
                </div>
              ))}
            </Slider>
          )}
        </div>
        {blog.content}
      </main>
    </div>
  );
};

export default BlogPost;
