import React from "react";
import Logo from "../images/footer-logo.svg";
import Youtube from "../images/youtube.svg";
import Twitter from "../images/twitter.svg";
import Github from "../images/github.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#3F3F41] py-14 ">
      <div className="container  text-white">
        <img src={Logo} alt="faraday logo" className="mb-8" />
        <div className="grid md:grid-cols-3">
          <div>
            <h4 className="text-lg mb-3">Quick links</h4>

            <ul className="text-sm font-normal space-y-3">
              <li>
                <Link to="#">About Faraday</Link>
              </li>
              <li>
                <Link to="#">All events</Link>
              </li>
              <li>
                <Link to="/#past-events">Past events</Link>
              </li>
              <li>
                <Link to="#">Gallery</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-3">Socials</h4>

            <div className="flex gap-3">
              <img src={Github} alt="youtube" />
              <img src={Youtube} alt="youtube" />
              <img src={Twitter} alt="youtube" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
