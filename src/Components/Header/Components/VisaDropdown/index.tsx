import "./index.scss";

import DropdownDown from "../../../../Pictures/arrowDown.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const VisaDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Navigate = useNavigate();
  return (
    <div
      className="visa-menu-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="visa-menu-button-container dropdown-menu-button">
        <div className="visa-menu-button">
          Visa
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
          <button
            className="visa-dropdown-menu-item"
            onClick={() => {
              Navigate("/visa-info");
            }}
          >
            About the Visa
          </button>
          <button
            className="visa-dropdown-menu-item"
            onClick={() => {
              Navigate("/visa-application");
            }}
          >
            Apply for the Visa
          </button>
          <button
            className="visa-dropdown-menu-item"
            onClick={() => {
              Navigate("/visa-cases");
            }}
          >
            My visa cases
          </button>
        </div>
      )}
    </div>
  );
};

export default VisaDropdownMenu;
