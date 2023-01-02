import React from "react";
import nationalEmblem from "./../../Pictures/nationalEmblem.png";
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-left-side">
            left side
            <img src={nationalEmblem} alt="National Emblem" />
        </div>
        <div className="header-right-side">
            right side
        </div>
      </div>
    </header>
  );
};

export default Header;