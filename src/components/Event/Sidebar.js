import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/side-logo.svg";

function Sidebar() {
  return (
    <div className="hidden md:fixed left-0 bg-white p-4 h-full md:flex items-center">
      <Link to="#">
        <img src={Logo} alt="faraday logo" className=" mx-auto" />
      </Link>
    </div>
  );
}

export default Sidebar;
