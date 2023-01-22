import "./index.scss";

import DropdownDown from "../../../../Pictures/arrowDown.svg";
import React from "react";
import { useState } from "react";

const VisaDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="visa-menu-container">
      <div className="visa-menu-button-container">
        <button
          className="visa-menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img
              src={DropdownDown}
              className="arrow arrow-down"
              alt="Dropdown Down"
            />
          ) : (
            <img
              src={DropdownDown}
              className="arrow arrow-up"
              alt="Dropdown Up"
            />
          )}
        </button>
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
