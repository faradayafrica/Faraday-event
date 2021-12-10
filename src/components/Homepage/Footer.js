import React from "react";
import Logo from "../../images/footer-logo.svg";

function Footer() {
  return (
    <div className="bg-[#3F3F41] py-14 ">
      <div className="container grid md:grid-cols-3 text-white">
        <div>
          <img src={Logo} alt="faraday logo" className="mb-8" />

          <h4 className="text-lg mb-3">Quick links</h4>

          <ul className="text-sm font-normal space-y-3">
            <li>About Faraday</li>
            <li>All events</li>
            <li>Past events</li>
            <li>Gallery</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
