import "./index.scss";

import DropdownAccountMenu from "./Components/DropdownAccountMenu";
import MinistryLogo from "../../../Pictures/ministryLogo.png";
import React from "react";
import ResidencePermitDropdown from "./Components/ResidancePermitDropdown";
import VisaDropdownMenu from "./Components/VisaDropdown";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="left-container">
          <img src={MinistryLogo} alt="Ministry Logo" />
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
