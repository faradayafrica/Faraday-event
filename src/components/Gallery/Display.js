import React from "react";

function Display({ images }) {
  console.log(images);
  return (
    <div className="container min-h-screen">
      {images.length === 0
        ? "Loading"
        : images.map((image, i) => (
            <div key={i}>
              {/* <img src={image?.fields?.images[0]?.url} alt="" /> */}
              {console.log(image?.fields?.images)}
            </div>
          ))}
    </div>
  );
}

export default Display;
