import "./index.scss";

import DropdownDown from "../../../../Pictures/arrowDown.svg";
import React from "react";
import { useState } from "react";

const VisaDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="visa-menu-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="visa-menu-button-container">
        <div className="visa-menu-button">
          Visas
          {isOpen ? (
            <img
              src={DropdownDown}
              className="arrow arrow-up"
              alt="Dropdown Up"
            />
          ) : (
            <img
              src={DropdownDown}
              className="arrow arrow-down"
              alt="Dropdown Down"
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="visa-dropdown-menu">
          <div className="visa-dropdown-menu-item">Option 1</div>
          <div className="visa-dropdown-menu-item">Option 2</div>
          <div className="visa-dropdown-menu-item">Option 3</div>
        </div>
      )}
    </div>
  );
};

export default VisaDropdownMenu;
