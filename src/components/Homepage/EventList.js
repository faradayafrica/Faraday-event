import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import SkeletonLoader from "../SkeletonLoader";

function EventList({ events }) {
  return (
    <section className="my-12" id="events">
      <h2 className="container text-xl md:text-2xl font-bold">
        Upcoming Events
      </h2>
      <div className="space-y-4 mt-4">
        {events.length === 0 ? (
          <SkeletonLoader upComingEvent />
        ) : (
          events?.map((event, i) => (
            <article key={i} className="odd:bg-[#F1F2F6] py-8">
              <div className="container md:flex gap-12">
                <Link
                  to={`/${event?.fields?.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}?_e=${event?.id}`}
                  className="block md:min-w-[300px] md:h-[250px] object-cover"
                >
                  <img
                    src={event?.fields?.cover_image?.[0]?.url}
                    alt={event?.fields?.title}
                    className="block w-full md:w-[300px] md:h-[250px] object-cover"
                    loading="lazy"
                  />
                </Link>

                <div className="flex flex-col justify-between  my-3">
                  <div className="space-y-3">
                    <h3 className="text-lg md:text-2xl font-semibold">
                      {event?.fields?.title}
                    </h3>
                    <p>{event?.fields?.description}</p>
                  </div>
                  <Button
                    link={`/${event?.fields?.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}?_e=${event?.id}`}
                  />
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
