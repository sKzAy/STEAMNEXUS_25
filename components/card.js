"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import "@/app/globals.css";

const targetDate = new Date('January 3, 2025 08:00:00'); 

const Card = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [eventStarted, setEventStarted] = useState(false); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date(); 
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        setEventStarted(true); 
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div data-aos="fade-up" className='card-div flex1 '>
      <div className='card flex1 w-fit'>
        {eventStarted ? (
          <p className="p-2 text-red-300">Event has started!</p>
        ) : (
          <>
            <p className="p-2 text-lg md:p-6  md:text-5xl text-white font-semibold font-pp">{days.toString().padStart(2, '0')}</p><p className='md:ml-0 font-pp text-xs day-text text-white font-semibold'>days</p>
            <p className="p-2 text-lg md:p-6 md:text-5xl text-white font-semibold font-pp">{hours.toString().padStart(2, '0')}</p> <p className='md:ml-0 font-pp text-xs  day-text text-white font-semibold'>hours</p> 
            <p className="p-2 text-lg md:p-6 md:text-5xl text-white font-semibold font-pp">{minutes.toString().padStart(2, '0')}</p><p className='md:ml-0 font-pp text-xs  day-text text-white font-semibold'>minutes</p>
            <p className="p-2 text-lg md:p-6 md:text-5xl text-white font-semibold font-pp">{seconds.toString().padStart(2,'0')}</p><p className='md:ml-0 font-pp text-xs  day-text text-white font-semibold pr-3'>seconds</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;