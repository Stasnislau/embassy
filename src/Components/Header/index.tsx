import "./index.scss";

import DropdownAccountMenu from "./Components/DropdownAccountMenu";
import React from "react";
import ResidencePermitDropdown from "./Components/ResidancePermitDropdown";
import VisaDropdownMenu from "./Components/VisaDropdown";
import vejshnoriaLogo from "../../Pictures/vejshnoriaLogo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="left-container">
          {/* <img src={vejshnoriaLogo} className="logo" alt="Vejshnoria Logo" /> */}
        </div>
        <div className="right-container">
          <DropdownAccountMenu />
          <ResidencePermitDropdown />
          <VisaDropdownMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
