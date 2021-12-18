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
    <section className="space-y-4">
      <h2 className="event__title">Event Schedule</h2>

      <div className="space-y-5 first:mt-5">
        {schedules.map((schedule, i) => (
          <div key={i} className="">
            <div className="space-y-4 ml-3">
              <span className="flex gap-3">
                <img src={Clock} alt="clock" /> {schedule.time}
              </span>

              <h3 className="text-lg font-semibold">{schedule.topic}</h3>
              <p>{schedule.desc}</p>

              <p>
                By <span className="text-primary">{schedule.speaker}</span>
              </p>
            </div>

            <hr className="bg-[#3F3F41] mt-4" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Schedule;
