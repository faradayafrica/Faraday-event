import React from "react";

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
    <div className="container">
      {schedules.map((schedule, i) => (
        <div key={i}>
          <span>{schedule.time}</span>
        </div>
      ))}
    </div>
  );
}

export default Schedule;
