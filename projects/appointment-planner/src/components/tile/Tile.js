import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <div className="tile-container__row">
        <p className="tile-title">Name: <strong>{name}</strong></p>
      </div>
      {Object.keys(description).map((keyName, i) => (
        <div className="tile-container__row" key={i}>
          <p className="tile-title"><span style={{ textTransform: "capitalize" }}>{keyName}</span>: <strong>{description[keyName]}</strong></p>
        </div>
      ))}
    </div>
  );
};
