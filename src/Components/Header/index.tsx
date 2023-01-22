import "./index.scss";

import DropdownAccountMenu from "./Components/DropdownAccountMenu";
import React from "react";
import vejshnoriaLogo from "../../Pictures/vejshnoriaLogo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="left-container">
          {/* <img src={vejshnoriaLogo} className="logo" alt="Vejshnoria Logo" /> */}
          </div>
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
