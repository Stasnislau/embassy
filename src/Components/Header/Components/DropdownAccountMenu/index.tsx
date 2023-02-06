import "./index.scss";

import React, { useState } from "react";

import AccountIcon from "../../../../Pictures/accountIcon.svg";
import DropdownDown from "../../../../Pictures/arrowDown.svg";
import { useNavigate } from "react-router-dom";

const DropdownAccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="dropdown-account-button-container dropdown-menu-button"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="trigger-button-container">
        <img src={AccountIcon} className="account-logo" alt="Account Logo" />
        <div className="dropdown-account-button">
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

        {isOpen && (
          <ul className="dropdown-account-menu">
            <li className="dropdown-account-menu-item">
              <button
                className="dropdown-account-menu-item-button"
                onClick={() => {
                  console.log("test1");
                }}
              >
                Your information
              </button>
            </li>
            <li className="dropdown-account-menu-item">
              <button
                className="dropdown-account-menu-item-button"
                onClick={() => {
                  console.log("test2");
                }}
              >
                Your cases
              </button>
            </li>
            <li className="dropdown-account-menu-item">
              <button
                className="dropdown-account-menu-item-button"
                onClick={() => {
                  console.log("test3");
                }}
              >
                Visit management
              </button>
            </li>
            <li className="dropdown-account-menu-item">
              <button
                className="dropdown-account-menu-item-button"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log out
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownAccountMenu;
