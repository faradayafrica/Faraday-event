import React from "react";
import Logo from "../images/footer-logo.svg";

function Footer() {
  return (
    <div className="bg-[#3F3F41] py-14 ">
      <div className="container  text-white">
        <img src={Logo} alt="faraday logo" className="mb-8" />
        <div className="grid md:grid-cols-3">
          <div>
            <h4 className="text-lg mb-3">Quick links</h4>

            <ul className="text-sm font-normal space-y-3">
              <li>About Faraday</li>
              <li>All events</li>
              <li>Past events</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div>
            <h4>Socials</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
