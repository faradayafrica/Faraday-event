import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../images/arrow.svg";

function Button({ link }) {
  return (
    <Link
      to={`/event/${link}`}
      className="inline-block mt-5 text-primary transition-transform ease-in-out group"
    >
      Learn More
      <img
        src={Arrow}
        alt="arrow"
        aria-hidden="true"
        className="inline ml-5 group-hover:translate-x-1 duration-300"
      />
    </Link>
  );
}

export default Button;
