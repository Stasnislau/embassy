import "./index.scss";

import React, { useState } from "react";

const VisitCard = (
  date: string,
  time: string,
  location: string,
  description: string
) => {
  return (
    <div className="visit-card">
      <div className="visit-card">
        <h1> Visit to the office </h1>
        <div className="visit-card-date">
          <p> {date} </p>
          <p> {time} </p>
        </div>
        <div className="visit-card-location">
          <p> {location} </p>
        </div>
        <div className="visit-card-description">
          <p> {description} </p>
        </div>
            
      </div>
    </div>
  );
};
