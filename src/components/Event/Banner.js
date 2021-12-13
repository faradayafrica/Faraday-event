import React from "react";

function Banner({ bannerImage }) {
  console.log(bannerImage);
  return (
    <div className={`h-[60vh] bg-[#00000079] flex items-center -z-10 `}>
      <img
        src={bannerImage}
        alt=""
        className="bg-cover w-full h-full object-cover -z-10"
      />
    </div>
  );
}

export default Banner;
