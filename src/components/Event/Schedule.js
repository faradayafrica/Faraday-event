import React from "react";
import Clock from "../../images/clock.svg";
const schedules = [
  {
    topic: "Event Topic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, malesuada placerat nec mattis posuere massa. Neque a lectus suspendisse urna cursus nullam. Euismod pulvinar ut a ut elit. Bibendum bibendum in a, vulputate quam. Adipiscing sed nisl lectus sit ut nibh. Dis cras molestie vulputate phasellus habitant semper blandit. Euismod sit in magnis augue vitae.",
    speaker: "James Doe",
    time: "9am - 9:30am",
  },
  {
    topic: "Event Topic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, malesuada placerat nec mattis posuere massa. Neque a lectus suspendisse urna cursus nullam. Euismod pulvinar ut a ut elit. Bibendum bibendum in a, vulputate quam. Adipiscing sed nisl lectus sit ut nibh. Dis cras molestie vulputate phasellus habitant semper blandit. Euismod sit in magnis augue vitae.",
    speaker: "James Doe",
    time: "9am - 9:30am",
  },
  {
    topic: "Event Topic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, malesuada placerat nec mattis posuere massa. Neque a lectus suspendisse urna cursus nullam. Euismod pulvinar ut a ut elit. Bibendum bibendum in a, vulputate quam. Adipiscing sed nisl lectus sit ut nibh. Dis cras molestie vulputate phasellus habitant semper blandit. Euismod sit in magnis augue vitae.",
    speaker: "James Doe",
    time: "9am - 9:30am",
  },
  {
    topic: "Event Topic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, malesuada placerat nec mattis posuere massa. Neque a lectus suspendisse urna cursus nullam. Euismod pulvinar ut a ut elit. Bibendum bibendum in a, vulputate quam. Adipiscing sed nisl lectus sit ut nibh. Dis cras molestie vulputate phasellus habitant semper blandit. Euismod sit in magnis augue vitae.",
    speaker: "James Doe",
    time: "9am - 9:30am",
  },
];

function Schedule() {
  return (
    <div>
      <h2 className="event__title">Event Schedule</h2>

      <div className="space-y-5 first:mt-5">
        {schedules.map((schedule, i) => (
          <div key={i}>
            <span className="flex gap-3">
              <img src={Clock} alt="" /> {schedule.time}
            </span>

            <h3>{schedule.topic}</h3>
            <p>{schedule.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
