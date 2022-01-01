import React, { useState, useEffect } from "react";
import Clock from "../../images/clock.svg";
import base from "../../util";
import SkeletonLoader from "../SkeletonLoader";

function Schedule({ eventSchedules }) {
  const [schedules, setSchedules] = useState([]);
  const [dataSchedules, setDataSchedules] = useState([]);

  useEffect(() => {
    eventSchedules &&
      eventSchedules.forEach((schedule) => {
        base("event_schedule").find(schedule, function (err, record) {
          if (err) {
            console.error(err);
            return;
          }
          setSchedules((prevState) => [...prevState, record]);
        });
      });

    console.log(eventSchedules);
  }, [eventSchedules]);

  // This useEffect is for making sure the schedules data is in ascending order
  // Whereby using the start time of the event to determine, which schedule comes first
  useEffect(() => {
    if (eventSchedules?.length === schedules?.length) {
      setDataSchedules(
        schedules.sort(
          (a, b) =>
            Number(a?.fields?.start_time?.replace(":", "")) -
            Number(b?.fields?.start_time?.replace(":", ""))
        )
      );

      // console.log(schedules.length !== eventSchedules?.length);
    }
  }, [eventSchedules, schedules]);

  return (
    <section className="space-y-4">
      <h2 className="event__title">Event Schedule</h2>

      <div className="space-y-5 first:mt-5">
        {schedules.length !== eventSchedules?.length ? (
          <SkeletonLoader schedule />
        ) : (
          dataSchedules?.map((schedule, i) => (
            <div
              key={i}
              className="pb-4 border-gray-400 border-b-2 last:border-0 ml-5"
            >
              {/* {console.log(schedules)} */}
              <div className="space-y-4  ">
                <span className="flex gap-2" style={{ alignItems: "center" }}>
                  <img src={Clock} alt="clock" style={{ height: "18px" }} />
                  <p className="text-md m-0">
                    {`${schedule?.fields?.start_time} - ${schedule?.fields?.end_time}`}
                  </p>
                </span>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold my-0">
                    {schedule?.fields?.topic}
                  </h3>
                  <p className="text-sm">{schedule?.fields?.notes}</p>
                  <p>
                    <span className="text-primary">
                      {schedule?.fields?.speaker}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Schedule;
