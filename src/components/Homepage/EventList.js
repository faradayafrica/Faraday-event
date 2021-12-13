import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../images/arrow.svg";
import SkeletonLoader from "../SkeletonLoader";

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

function EventList({ events }) {
  return (
    <section className="my-5">
      <h2 className="container text-xl md:text-2xl font-bold">
        Upcoming Events
      </h2>
      <div className="space-y-4 mt-4">
        {events.length === 0 ? (
          <SkeletonLoader />
        ) : (
          events?.map((event, i) => (
            <article key={i} className="odd:bg-[#F1F2F6] py-8">
              <div className="container md:flex gap-12">
                <img
                  src={event?.fields?.cover_image[0].url}
                  alt={event?.fields?.title}
                  className="block w-full md:w-[300px] bg-cover object-cover"
                />

                <div className="space-y-3 my-3">
                  <h3 className="text-lg md:text-2xl font-semibold">
                    {event?.fields?.title}
                  </h3>
                  <p>{event?.fields?.description}</p>

                  <Link
                    to={`/event/${event?.id}`}
                    className="inline-block mt-5 text-primary"
                  >
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
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default EventList;
