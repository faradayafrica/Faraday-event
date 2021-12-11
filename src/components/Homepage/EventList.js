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

// {events && events.map((event, i) => (
//       <article key={i} className="odd:bg-[#F1F2F6] py-8">
//         <div className="container md:flex gap-12">
//           <img src={event.image} alt="" className="w-full md:max-w-sm" />

//           <div className="space-y-3 my-3">
//             <h3 className="text-2xl font-semibold">{event.title}</h3>
//             <p>{event.desc}</p>

//             <Link to="/event" className="inline-block mt-5 text-primary">
//               Learn More
//               <img
//                 src={Arrow}
//                 alt="arrow"
//                 aria-hidden="true"
//                 className="inline ml-5"
//               />
//             </Link>
//           </div>
//         </div>
//       </article>
//     ))}

function EventList({ events }) {
  console.log(events);
  return (
    <section className="my-5">
      <h2 className="container text-xl md:text-2xl font-bold">
        Upcomming Events
      </h2>
      <div className="space-y-4 mt-4">
        {events.length === 0
          ? Array(4)
              .fill()
              .map((data, i) => (
                <div key={i} className="animate-pulse odd:bg-[#F1F2F6] py-8">
                  <div className="container md:flex gap-12">
                    <div className="w-full md:w-[400px] h-[200px] bg-gray-300"></div>

                    <div className="animate-pulse space-y-3 my-3 w-full">
                      <div className="w-[60%] h-[10px] bg-[#0000003d] rounded"></div>
                      <div className="w-[70%] h-[10px] bg-[#0000003d] rounded mt-3"></div>
                      <div className="w-full h-[10px] bg-[#0000003d] rounded"></div>
                      <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                      <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                      <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                      <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                      <div className="w-[50%] h-[10px] bg-[#0000005d] rounded"></div>
                    </div>
                  </div>
                </div>
              ))
          : events?.map((event, i) => (
              <article key={i} className="odd:bg-[#F1F2F6] py-8">
                <div className="container md:flex gap-12">
                  <img
                    src={event?.fields?.cover_image[0].url}
                    alt=""
                    className="w-full md:w-[350px] md:bg-cover"
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
            ))}
      </div>
    </section>
  );
}

export default EventList;
