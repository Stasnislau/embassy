import React from "react";
import nationalEmblem from "./../../Pictures/nationalEmblem.png";
import twitterLogo from "./../../Pictures/twitter.png";
import facebookLogo from "./../../Pictures/facebook.png";
import instagramLogo from "./../../Pictures/instagram.png";
import youtubeLogo from "./../../Pictures/youtube.png";
import infoLogo from "./../../Pictures/info.png";
import "./index.scss";
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-left-side">
          <div className="header-left-side-container">
            <div className="header-left-side-container-item">
              <a href="https://en.wikipedia.org/wiki/Veyshnoria">
                <img
                  src={infoLogo}
                  alt="Info Logo"
                  className="logo"
                />
              </a>
            </div>
            <div className="header-left-side-container-item">
              <a href="https://www.facebook.com/">
                <img
                  src={facebookLogo}
                  alt="Facebook Logo"
                  className="logo"
                />
              </a>
            </div>
            <div className="header-left-side-container-item">
              <a href="https://www.instagram.com/">
                <img
                  src={instagramLogo}
                  alt="Instagram Logo"
                  className="logo"
                />
              </a>
            </div>
            <div className="header-left-side-container-item">
              <a href="https://www.twitter.com/">
                <img
                  src={twitterLogo}
                  alt="Twitter Logo"
                  className="logo"
                />
              </a>
            </div>
            <div className="header-left-side-container-item">
              <a href="https://www.youtube.com/">
                <img
                  src={youtubeLogo}
                  alt="Youtube Logo"
                  className="logo"
                />
              </a>
            </div>
          </div>
        </div>
        <img
          className="header-emblem"
          src={nationalEmblem}
          alt="National Emblem"
        />
        <div className="header-right-side">
          <div className="header-right-side-container"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
