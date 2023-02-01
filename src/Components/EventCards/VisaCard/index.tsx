import "./index.scss";

import React from "react";

interface VisaCardProps {
  props: {
    dateOfSubmission: string;
    dateOfDecision: string;
    status: string;
    description: string;
  };
}

const VisaCard = ({props}: VisaCardProps) => {
  return (
    <div className="visa-card">
      <h1> Visa </h1>
      <div className="visa-card-body">
        <div className="visa-card-date">
          <p>
            Date of submission: <b>{props.dateOfSubmission}</b>
          </p>
          <p>
            Date of decision: <b>{props.dateOfDecision}</b>
          </p>
        </div>
        <div className="visa-card-status">
          <p>
            Status: <b>{props.status}</b>
          </p>
        </div>
        <div className="visa-card-description">
          <p> Description: {props.description} </p>
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
