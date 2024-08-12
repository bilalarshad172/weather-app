import React from 'react';

const TimeFormat = ({ time24 }) => {
  const convertTo12HourFormat = (time) => {
    let [hours, minutes, seconds] = time.split(":");
    hours = parseInt(hours, 10);
    const suffix = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes}:${seconds} ${suffix}`;
  };

  return (
    <div>{convertTo12HourFormat(time24)}</div>
  );
};

export default TimeFormat;
