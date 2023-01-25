import "./index.scss";

import DropdownDown from "../../../../Pictures/arrowDown.svg";
import React from "react";
import { useState } from "react";

const ResidencePermitDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="residence-permit-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="residence-permit-button-container">
        <div
          className="residence-permit-button"
        >
          <b>Residence permits</b>
          {isOpen ? (
            <img
              src={DropdownDown}
              className="arrow arrow-up"
              alt="Dropdown Down"
            />
          ) : (
            <img
              src={DropdownDown}
              className="arrow arrow-down"
              alt="Dropdown down"
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="residence-permit-menu">
          <div className="residence-permit-menu-item">Option 1</div>
          <div className="residence-permit-menu-item">Option 2</div>
          <div className="residence-permit-menu-item">Option 3</div>
        </div>
      )}
    </div>
  );
};

export default ResidencePermitDropdown;
