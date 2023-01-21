import "./index.scss";

import DropdownAccountMenu from "./Components/DropdownAccountMenu";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="left-container">{/* add something here */}</div>
        <div className="right-container">
          <div className="quick-access-menus-container">
              <DropdownAccountMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
