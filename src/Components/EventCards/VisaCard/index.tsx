import "./index.scss";

import React from "react";

const VisaCard = () => {
    return (
        <div className="visa-card">
        <h1> Visa </h1>
        <div className="visa-card-body">
            <div className="visa-card-date">
            <p>
                Date: <b>12/12/2020</b>
            </p>
            <p>
                Time: <b>12:00</b>{" "}
            </p>
            </div>
            <div className="visa-card-location">
            <p>
                Where: <b>Office</b>{" "}
            </p>
            </div>
            <div className="visa-card-description">
            <p> Description: Visit to the office </p>
            </div>
        </div>
        <button
            className="visa-card-button"
            onClick={() => {
            console.log("Button clicked");
            }}
        >
            More info
        </button>
        </div>
    );
};

export default VisaCard;