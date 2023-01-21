import "./index.scss";

import React, { useState } from "react";

import AccountIcon from "../../../../Pictures/accountIcon.svg";
import DropdownDown from "../../../../Pictures/arrowDown.svg";
import DropdownUp from "../../../../Pictures/arrowUp.svg";

const DropdownAccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="dropdown-account-button-container">
        <img src={AccountIcon} alt="Account Logo" />
        <button
          className="dropdown-account-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img src={DropdownUp} className="arrow" alt="Dropdown Up" />
          ) : (
            <img src={DropdownDown} className="arrow" alt="Dropdown Down" />
          )}
        </button>
      </div>
      {isOpen && (
        <ul className="dropdown-account-menu">
          <li className="dropdown-account-menu-item">Option 1</li>
          <li className="dropdown-account-menu-item">Option 2</li>
          <li className="dropdown-account-menu-item">Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownAccountMenu;
