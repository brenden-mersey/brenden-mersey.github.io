import React from 'react';
import IconAdd from '../IconAdd/IconAdd';
import IconRemove from '../IconRemove/IconRemove';

export default function ButtonAddTrack({ buttonAction }) {
  const icon = buttonAction === "add" ? <IconAdd /> : <IconRemove />;
  return (
    <button className="button button--secondary" type="button">{icon}</button>
  );
}