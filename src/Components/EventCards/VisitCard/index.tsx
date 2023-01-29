import "./index.scss";

import React, { useState } from "react";

const VisitCard = (props: {
  date: string;
  time: string;
  location: string;
  description: string;
}) => {
  return (
    <div className="visit-card">
      <div className="visit-card">
        <h1> Visit to the office </h1>
        <div className="visit-card-date">
          <p> {props.date} </p>
          <p> {props.time} </p>
        </div>
        <div className="visit-card-location">
          <p> {props.location} </p>
        </div>
        <div className="visit-card-description">
          <p> {props.description} </p>
        </div>
        <button className="visit-card-button">More info</button>
      </div>
    </div>
  );
};

export default VisitCard;
