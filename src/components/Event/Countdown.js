import React, { useEffect, useState } from "react";

function Countdown({ eventTitle, eventDate, eventTime }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // function formatTime(eventTime) {
  //   if (eventTime === undefined) return;

  //   if (eventTime.includes("am")) {
  //     return eventTime.replace("am", ":00");
  //   }
  //   if (eventTime.includes("pm")) {
  //     return eventTime.replace("pm", ":00");
  //   }
  // }

  // console.log(`${eventDate} ${eventTime}`);

  function calculateTimeLeft() {
    let difference = +new Date(`${eventDate} ${eventTime}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center -mt-[135px] w-full md:max-w-[420px]">
      <h1 className="text-4xl font-bold md:text-left text-white mb-3">
        {eventTitle ? (
          eventTitle
        ) : (
          <div className="animate-pulse my-3 w-full">
            <div className="w-[100%] h-[20px] bg-[#0000003d] rounded md:w-[60%]"></div>
          </div>
        )}
      </h1>

      <div className="bg-white px-8 py-8 shadow-md z-20">
        <div className="flex justify-between ">
          <div className="flex flex-col justify-center text-2xl font-bold">
            {Object.keys(timeLeft).length == 0
              ? "00"
              : timeLeft.days >= 10
              ? timeLeft.days
              : `0${timeLeft.days}`}
            {/* {timeLeft.days >= 10 ? timeLeft.days : `0${timeLeft.days}`} */}
            <span className="text-xs font-normal">Days</span>
          </div>
          <div className="flex flex-col justify-center text-2xl font-bold">
            {Object.keys(timeLeft).length == 0
              ? "00"
              : timeLeft.hours >= 10
              ? timeLeft.hours
              : `0${timeLeft.hours}`}
            <span className="text-xs font-normal">Hours</span>
          </div>
          <div className="flex flex-col justify-center text-2xl font-bold">
            {Object.keys(timeLeft).length == 0
              ? "00"
              : timeLeft.minutes >= 10
              ? timeLeft.minutes
              : `0${timeLeft.minutes}`}
            <span className="text-xs font-normal">Minutes</span>
          </div>
          <div className="flex flex-col justify-center text-2xl font-bold">
            {Object.keys(timeLeft).length == 0
              ? "00"
              : timeLeft.seconds >= 10
              ? timeLeft.seconds
              : `0${timeLeft.seconds}`}
            <span className="text-xs font-normal">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
