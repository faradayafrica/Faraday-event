import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import Menu from "../images/menu.svg";
import Close from "../images/close.svg";
import Back from "../images/back-arrow.svg";

export default function Navigation({ event, gallery }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`container grid grid-cols-2 justify-between items-center py-5 ${
        event && "md:hidden"
      }`}
    >
      <Link to="/">
        <img src={Logo} alt="faraday logo" className="w-[170px]" />
      </Link>

      {event || gallery ? (
        <Link to="/" className="flex gap-3 items-center justify-self-end">
          <img src={Back} alt="back" aria-hidden="true" />
          {gallery && <span>Return</span>}
        </Link>
      ) : (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto space-y-1"
          >
            <span
              className={`block w-6 h-[2px] bg-black transition-transform duration-200 ${
                open && "[transform:_translateY(8px)_rotate(45deg)]"
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-black ${open && "opacity-0"}`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-black transition-transform duration-200 ${
                open && "[transform:_translateY(-4px)_rotate(-45deg)]"
              }`}
            ></span>
            {/* <img
              src={open ? Close : Menu}
              alt="menu"
              aria-hidden="true"
              className="ml-auto"
            /> */}
          </button>

          <div
            className={`${
              open
                ? "absolute bg-[#f8f9fa] block py-4 top-8 left-0 right-0 z-[10000] md:static md:top-[unset] md:py-0"
                : "hidden md:block "
            } col-span-2 mt-4 transition-all duration-200 md:col-auto md:justify-self-end md:mt-0`}
          >
            <ul
              className={`items-center space-y-2  ${
                open ? "w-[90%] mx-auto md:mx-0 md:w-full" : ""
              } md:space-y-0 md:space-x-3 md: md:flex`}
            >
              <li className="navlink font-medium ">
                <a href="#past-events">Past Events</a>
              </li>
              <li className="navlink font-medium">
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
