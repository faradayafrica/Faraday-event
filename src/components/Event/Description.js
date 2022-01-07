import React from "react";
import Location from "../../images/location.svg";
import Clock from "../../images/clock.svg";
import Calendar from "../../images/calendar.svg";
import { getAMPM } from "../../util";

function Description({ event, eventCompleted }) {
  return (
    <section className="space-y-4">
      <h2 className="event__title">Event Description</h2>
      {event.length === 0 ? (
        <div className="space-y-2">
          <span className="animate-pulse block w-full h-[10px] bg-[#0000003d] rounded"></span>
          <span className="animate-pulse block w-full h-[10px] bg-[#0000003d] rounded"></span>
          <span className="animate-pulse block w-full h-[10px] bg-[#0000003d] rounded"></span>
          <span className="animate-pulse block w-[150px] h-[10px] bg-[#0000003d] rounded"></span>
        </div>
      ) : (
        <p>{event?.fields?.description}</p>
      )}

      <ul className="space-y-5">
        <li className="flex">
          {event.length === 0 ? (
            <span className="animate-pulse block w-full h-[10px] bg-[#0000003d] rounded"></span>
          ) : (
            <>
              <img src={Location} alt="" className="mr-4" />{" "}
              {event?.fields?.venue}
            </>
          )}
        </li>
        <li className="flex">
          {event.length === 0 ? (
            <span className="animate-pulse block w-[50%] h-[10px] bg-[#0000003d] rounded"></span>
          ) : (
            <>
              <img src={Calendar} alt="" className="mr-4" />
              {event?.fields?.date}
            </>
          )}
        </li>
        <li className="flex">
          {event.length === 0 ? (
            <span className="animate-pulse block w-[50%] h-[10px] bg-[#0000003d] rounded"></span>
          ) : (
            <>
              <img src={Clock} alt="" className="mr-4" />
              {`${event?.fields?.time} ${getAMPM(
                event?.fields?.time,
                true
              )} prompt`}
            </>
          )}
        </li>
      </ul>

      {!eventCompleted && (
        <a
          href="#register"
          className="block text-white text-center bg-primary p-4 w-full md:hidden"
        >
          Register
        </a>
      )}
    </section>
  );
}

export default Description;
