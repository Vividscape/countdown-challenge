import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter flex justify-center">
        <div>
          <div className='text-white flex justify-center items-center sm:pb-4'>
            <DateTimeDisplay value={days} type={'Days'} />
            <p className='colon px-0 sm:px-2.5 pb-8 sm:pb-12'>:</p>
            <DateTimeDisplay value={hours} type={'Hours'} />
            <p className='colon px-0 sm:px-2.5 pb-8 sm:pb-12'>:</p>
            <DateTimeDisplay value={minutes} type={'Mins'} />
            <p className='colon px-0 sm:px-2.5 pb-8 sm:pb-12'>:</p>
            <DateTimeDisplay value={seconds} type={'Secs'} />
          </div>
        </div>
      </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    window.location.reload(false);
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;