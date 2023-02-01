import "./index.scss";

import React, { useState } from "react";

interface VisitCardProps {
  props: {
    date: string;
    time: string;
    location: string;
    description: string;
  };
}

const VisitCard = ({ props }: VisitCardProps) => {
  return (
    <div className="visit-card">
      <h1> Visit to the office </h1>
      <div className="visit-card-body">
        <div className="visit-card-date">
          <p>
            Date: <b>{props.date}</b>
          </p>
          <p>
            Time: <b>{props.time}</b>{" "}
          </p>
        </div>
        <div className="visit-card-location">
          <p>
            Where: <b>{props.location}</b>{" "}
          </p>
        </div>
        <div className="visit-card-description">
          <p> Description: {props.description} </p>
        </div>
      </div>
      <button
        className="visit-card-button"
        onClick={() => {
          console.log("Button clicked");
        }}
      >
        More info
      </button>
    </div>
  );
};

export default VisitCard;
