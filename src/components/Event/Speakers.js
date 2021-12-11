import React from "react";

const data = [
  {
    title: "Event Title",
    desc: "Lorem ipsum dolor",
    image:
      "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
  {
    title: "Event Title",
    desc: "Lorem ipsum dolor",
    image:
      "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
  {
    title: "Event Title",
    desc: "Lorem ipsum dolor",
    image:
      "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
  },
];

function Speakers() {
  return (
    <div>
      <h2 className="event__title">Speakers</h2>

      <div className="flex flex-wrap justify-center gap-3">
        {data.map((data, i) => (
          <div key={i}>
            <img src={data.image} alt="" className="w-[200px]" />
            <h4 className="text-center">{data.title}</h4>
            <p className="text-center">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers;