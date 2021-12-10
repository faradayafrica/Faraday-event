import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

export default function Navigation() {
  return (
    <nav className="container flex justify-between items-center py-5">
      <Link to="/">
        <img src={Logo} alt="faraday logo" />
      </Link>

      <ul className="flex items-center space-x-4">
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
