import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../images/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

import "swiper/css";
import "swiper/css/pagination";
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

function PastEvent({ events }) {
  return (
    <section>
      <h2 className="container text-xl md:text-2xl font-bold">
        Our past event
      </h2>

      <div className="bg-[#F1F2F6] py-12 mt-4">
        <div className="container">
          <Swiper
            navigation={true}
            slidesPerView={1}
            spaceBetween={10}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {events.length === 0 ? (
              <SkeletonLoader vtl />
            ) : (
              events.map((event, i) => (
                <SwiperSlide key={i}>
                  <article>
                    <img
                      src={event?.fields?.cover_image[0].url}
                      alt={event?.fields?.title}
                      className="w-full h-[300px] object-cover"
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
                  </article>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default PastEvent;
