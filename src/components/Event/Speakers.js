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
    <div className="container flex flex-wrap">
      {data.map((data, i) => (
        <div key={i}>
          <img src={data.image} alt="" className="w-[200px]" />
          <h4>{data.title}</h4>
          <p>{data.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Speakers;
