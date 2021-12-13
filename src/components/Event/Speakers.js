import React, { useState, useEffect } from "react";
import base from "../../util";

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
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    base("event_speaker")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        // console.log(records);
        records.map((record) =>
          setSpeakers([
            {
              id: record.id,
              ...record.fields,
            },
          ])
        );
        fetchNextPage();
      });
  }, []);

  useEffect(() => {
    console.log(speakers);
  }, [speakers]);
  return (
    <section className="space-y-4">
      <h2 className="event__title">Speakers</h2>

      <div className="flex flex-wrap gap-3">
        {data.map((data, i) => (
          <div key={i}>
            <img src={data.image} alt="" className="w-[200px]" />
            <h4 className="text-center">{data.title}</h4>
            <p className="text-center">{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;
