import "./index.scss";

import React, { useState } from "react";

import AccountIcon from "../../../../Pictures/accountIcon.png";
import DropdownDown from "../../../../Pictures/dropdownDown.png";
import DropdownUp from "../../../../Pictures/dropdownUp.png";

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
            <img src={DropdownUp} alt="Dropdown Up" />
          ) : (
            <img src={DropdownDown} alt="Dropdown Down" />
          )}
        </button>
      </div>
      {isOpen && (
        <ul className="dropdown-account-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownAccountMenu;
