import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SkeletonLoader from "../SkeletonLoader";
import Button from "../Button";

// install Swiper modules
// SwiperCore.use([Navigation]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

function PastEvent({ events }) {
  return (
    <section id="past-events">
      <h2 className="container text-xl md:text-2xl font-bold">
        Our past event
      </h2>

      <div className="bg-[#F1F2F6] py-12 mt-4">
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            slidesPerView={1}
            spaceBetween={25}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {events.length === 0 ? (
              <SkeletonLoader pastEvent />
            ) : (
              events.map((event, i) => (
                <SwiperSlide key={i}>
                  <article>
                    <Link
                      to={`/event/${event?.id}`}
                      className="block w-full md:min-w-[300px] md:h-[250px] object-cover"
                    >
                      <img
                        src={event?.fields?.cover_image[0].url}
                        alt={event?.fields?.title}
                        className="w-full md:h-[250px] object-cover"
                        loading="lazy"
                      />
                    </Link>

                    <div className="space-y-3 my-3">
                      <h3 className="text-lg md:text-2xl font-semibold">
                        {event?.fields?.title}
                      </h3>
                      <p>{event?.fields?.description}</p>

                      <Button link={event?.id} />
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
