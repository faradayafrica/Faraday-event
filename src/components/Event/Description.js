import React from "react";
import Location from "../../images/location.svg";
import Clock from "../../images/clock.svg";
import Calendar from "../../images/calendar.svg";

function Description() {
  return (
    <section className="space-y-4">
      <h2 className="event__title">Event Description</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus pretium
        integer imperdiet nulla lorem ornare. Sit cursus tincidunt est justo.
        Odio vitae bibendum tempor sit. Eros rhoncus, viverra urna ultricies
        enim augue auctor. Nisl fames id consequat aliquet mauris in sit lectus
        nisl. Quis integer mattis nulla ligula. Adipiscing aliquam dui
        sollicitudin urna.
      </p>

      <ul className="space-y-5">
        <li className="flex">
          <img src={Location} alt="" className="mr-4" /> PDTF Auditorium,
          Engineering faculty Unizik
        </li>
        <li className="flex">
          <img src={Calendar} alt="" className="mr-4" />
          8th January, 2021
        </li>
        <li className="flex">
          <img src={Clock} alt="" className="mr-4" />
          9am prompt
        </li>
      </ul>

      <a
        href="#register"
        className="block text-white text-center bg-primary p-4 w-full md:hidden"
      >
        Register
      </a>
    </section>
  );
}

export default Description;
