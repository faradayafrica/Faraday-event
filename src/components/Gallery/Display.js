import React from "react";
import SkeletonLoader from "../SkeletonLoader";

function Display({ images, handleImageClick }) {
  // const openCardView = (e) => {
  //   e.preventDefault();
  //   setCardViewIsActive(!cardViewIsActive);
  //   setSelectedIndex(+e.currentTarget.dataset.index])
  // };
  // document.getElementById('image')?.requestFullscreen()
  return (
    <>
      <div className="container">
        <h2 className="text-2xl border-b border-primary md:pb-4 md:max-w-md md:text-5xl">
          Memorabilia
        </h2>
      </div>
      <div className="my-4 md:my-8 min-h-screen">
        <div className="overflow-y-auto ">
          <div className="grid gap-2 [grid-template-columns:_repeat(2,1fr)] [grid-template-rows:_unset] md:[grid-template-rows:_repeat(3,15rem)] md:[grid-template-columns:_repeat(8,20rem)] [grid-column:_1/5]">
            {images.length === 0 ? (
              <SkeletonLoader gallery />
            ) : (
              images.map((image, i) => (
                <div key={i} className="bg-black gallery-image" onClick={() => handleImageClick(image?.url)}>
                  <img
                    src={image?.url}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
