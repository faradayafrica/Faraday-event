import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import Menu from "../images/menu.svg";
import Close from "../images/close.svg";
import Back from "../images/back-arrow.svg";

export default function Navigation({ event, gallery }) {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`container flex justify-between items-center py-5 relative ${
        event && "md:hidden"
      }`}
    >
      <Link to="/">
        <img src={Logo} alt="faraday logo" />
      </Link>

      {event || gallery ? (
        <Link to="/" className="flex gap-3 items-center">
          <img src={Back} alt="back" aria-hidden="true" />
          {gallery && <span>Return</span>}
        </Link>
      ) : (
        <>
          <button onClick={() => setOpen(true)} className="md:hidden">
            <img src={open ? Close : Menu} alt="menu" aria-hidden="true" />
          </button>

          <ul className={`items-center space-x-4 hidden md:flex`}>
            <li>
              <a href="#past-events">Past Events</a>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}
