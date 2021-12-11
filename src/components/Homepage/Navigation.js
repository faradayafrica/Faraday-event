import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import Menu from "../../images/menu.svg";
import Close from "../../images/close.svg";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="container flex justify-between items-center py-5 relative">
      <Link to="/">
        <img src={Logo} alt="faraday logo" />
      </Link>

      <button onClick={() => setOpen(true)} className="md:hidden">
        <img src={open ? Close : Menu} alt="menu" aria-hidden="true" />
      </button>

      <ul className={`items-center space-x-4 hidden md:flex`}>
        <li>
          <Link to="/">Past Events</Link>
        </li>
        <li>
          <Link to="/">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}
