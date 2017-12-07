import React from 'react';

function Box({ value, unit }) {
  return (
    <div className="box">
      <span className="time">{value}</span>
      {unit}
    </div>
  );
}
export default Box;
