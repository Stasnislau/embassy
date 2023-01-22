import "./index.scss";

import React, { useState } from "react";

import AccountIcon from "../../../../Pictures/accountIcon.svg";
import DropdownDown from "../../../../Pictures/arrowDown.svg";

const DropdownAccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-account-button-container">
      <div className="trigger-button-container">
        <img src={AccountIcon} className="account-logo" alt="Account Logo" />
        <button
          className="dropdown-account-button"
          onClick={() => setIsOpen(!isOpen)}
        >
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
        </button>

        {isOpen && (
          <ul className="dropdown-account-menu">
            <li className="dropdown-account-menu-item">Option 1</li>
            <li className="dropdown-account-menu-item">Option 2</li>
            <li className="dropdown-account-menu-item">Option 3</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownAccountMenu;
