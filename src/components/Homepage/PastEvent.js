import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../images/arrow.svg";

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
];

function PastEvent() {
  return (
    <section>
      <h2 className="container text-xl md:text-2xl font-bold">
        Our past event
      </h2>

      <div className="bg-[#F1F2F6] py-12 mt-4">
        <div className="container flex flex-col md:flex-row gap-5">
          {data.map((event, i) => (
            <div key={i}>
              <img src={event.image} alt="" />

              <div className="space-y-3 my-3">
                <h3 className="text-lg md:text-2xl font-semibold">
                  {event.title}
                </h3>
                <p>{event.desc}</p>
                <Link to={`/event`} className="inline-block mt-5 text-primary">
                  Learn More
                  <img
                    src={Arrow}
                    alt="arrow"
                    aria-hidden="true"
                    className="inline ml-5"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PastEvent;
