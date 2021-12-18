import React, { useState, useEffect } from "react";
import Clock from "../../images/clock.svg";
import base from "../../util";
import SkeletonLoader from "../SkeletonLoader";

// const schedules = [
//   {
//     topic: "Event Topic",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, malesuada placerat nec mattis posuere massa. Neque a lectus suspendisse urna cursus nullam. Euismod pulvinar ut a ut elit. Bibendum bibendum in a, vulputate quam. Adipiscing sed nisl lectus sit ut nibh. Dis cras molestie vulputate phasellus habitant semper blandit. Euismod sit in magnis augue vitae.",
//     speaker: "James Doe",
//     time: "9am - 9:30am",
//   },
//   {
//     topic: "Event Topic",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, malesuada placerat nec mattis posuere massa. Neque a lectus suspendisse urna cursus nullam. Euismod pulvinar ut a ut elit. Bibendum bibendum in a, vulputate quam. Adipiscing sed nisl lectus sit ut nibh. Dis cras molestie vulputate phasellus habitant semper blandit. Euismod sit in magnis augue vitae.",
//     speaker: "James Doe",
//     time: "9am - 9:30am",
//   },
//   {
//     topic: "Event Topic",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, malesuada placerat nec mattis posuere massa. Neque a lectus suspendisse urna cursus nullam. Euismod pulvinar ut a ut elit. Bibendum bibendum in a, vulputate quam. Adipiscing sed nisl lectus sit ut nibh. Dis cras molestie vulputate phasellus habitant semper blandit. Euismod sit in magnis augue vitae.",
//     speaker: "James Doe",
//     time: "9am - 9:30am",
//   },
//   {
//     topic: "Event Topic",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, malesuada placerat nec mattis posuere massa. Neque a lectus suspendisse urna cursus nullam. Euismod pulvinar ut a ut elit. Bibendum bibendum in a, vulputate quam. Adipiscing sed nisl lectus sit ut nibh. Dis cras molestie vulputate phasellus habitant semper blandit. Euismod sit in magnis augue vitae.",
//     speaker: "James Doe",
//     time: "9am - 9:30am",
//   },
// ];

function Schedule() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    base("event_schedule")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        console.log(records);
        setSchedules(records);
        fetchNextPage();
      });
  }, []);

  return (
    <section className="space-y-4">
      <h2 className="event__title">Event Schedule</h2>

      <div className="space-y-5 first:mt-5">
        {schedules.length === 0 ? (
          <SkeletonLoader schedule />
        ) : (
          schedules.map((schedule, i) => (
            <div
              key={i}
              className="pb-4 border-gray-400 border-b-2 last:border-0"
            >
              <div className="space-y-4 ml-3">
                <span className="flex gap-3">
                  <img src={Clock} alt="clock" />
                  {schedule?.fields?.start_time} {schedule?.fields?.end_time}
                </span>

                <h3 className="text-lg font-semibold">
                  {schedule?.fields?.topic}
                </h3>
                <p>{schedule?.fields?.notes}</p>

                <p>
                  By{" "}
                  <span className="text-primary">
                    {schedule?.fields?.speaker}
                  </span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Schedule;
