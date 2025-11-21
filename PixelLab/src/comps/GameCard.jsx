import React from "react";
import Style from "../assets/styles/home.module.css";

const GameCard = ({ 
  icon, 
  title, 
  publisher, 
  appstore,
  playstore,
  bigImage 
}) => {
  return (
    <div className={Style.bigGameCard}>
      <div className={Style.bigGameLeft}>
        <img src={icon} className={Style.leftIcon} alt="game icon" />

        <div className={Style.leftInfo}>
          <h2>{title}</h2>
          <p>
            Publisher: <span>{publisher}</span>
          </p>

          <div className={Style.downloadRow}>
            {appstore && (
              <a href={appstore} target="_blank" rel="noopener noreferrer">
                <img src="/appstore.svg" alt="App Store" />
              </a>
            )}

            {playstore && (
              <a href={playstore} target="_blank" rel="noopener noreferrer">
                <img src="/google_play.svg" alt="Google Play" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={Style.bigGameRight}>
        <img src={bigImage} alt="game art" />
      </div>
    </div>
  );
};

export default GameCard;
