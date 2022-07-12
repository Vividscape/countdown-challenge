import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className='countdown '>
      <p className='text-center'>{value}</p>
      <span className='block text-center text-base sm:text-2xl uppercase font-light mt-2'>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;