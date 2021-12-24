import React from "react";

function Display({ images }) {
  return (
    <div className=" md:my-8  min-h-screen">
      <div className="overflow-y-auto scroll-bar ">
        <div className="grid gap-2 [grid-template-columns:_repeat(2,1fr)] [grid-template-rows:_unset] md:[grid-template-rows:_repeat(3,15rem)] md:[grid-template-columns:_repeat(5,20rem)] [grid-column:_1/5]">
          {images.length === 0
            ? "Loading"
            : images.map((image, i) => (
                <div key={i} className="bg-black">
                  <img
                    src={image?.url}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  {/* {console.log(image?.fields?.images)} */}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Display;
