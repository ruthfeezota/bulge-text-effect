import React, { useState, useEffect} from 'react'

function DigitalClock() {

const [time, setTime] = useState(new Date());

useEffect (() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
}, []);

function formatTime(){
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const meridiem = hours >= 12 ? "PM" : "AM"

  hours = hours % 12 || 12;

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}`;
}

function padZero(number) {
  return ( number < 10 ? "0" : "") + number;
}

  return (
    <div className=''>
      <div className='text-8xl'>
        <span>{formatTime()}</span>
       
      </div>
      <div className='flex items-center justify-center'>
      <button className='py-4 bg-red p-4 hover:underline'>Start Timer</button>
      <button className='py-4 bg-red p-4 hover:underline'>End Timer</button>
      </div>
    </div>
  )
}

export default DigitalClock