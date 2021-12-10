import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Event Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis eveniet ratione ab obcaecati! Quisquam quibusdam voluptates atque unde culpa!",
    image:
      "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
  {
    title: "Event Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis eveniet ratione ab obcaecati! Quisquam quibusdam voluptates atque unde culpa!",
    image:
      "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
  {
    title: "Event Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis eveniet ratione ab obcaecati! Quisquam quibusdam voluptates atque unde culpa!",
    image:
      "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
  {
    title: "Event Title",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis eveniet ratione ab obcaecati! Quisquam quibusdam voluptates atque unde culpa!",
    image:
      "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
];

function EventList() {
  return (
    <section>
      <h2>Upcomming Events</h2>
      <div className="space-y-4">
        {data.map((event, i) => (
          <article key={i} className="flex">
            <img src={event.image} alt="" className="w-100% max-w-sm" />
            <div>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>

              <Link to="/event">
                <span className="text-primary">Learn more</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EventList;
