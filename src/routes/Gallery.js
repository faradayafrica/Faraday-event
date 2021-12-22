import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Display from "../components/Gallery/Display";
import Navigation from "../components/Navigation";
import base from "../util";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    base("gallery")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setImages(records);
        fetchNextPage();
      });
  }, []);

  return (
    <>
      <Navigation />
      <Display images={images} />
      <Footer />
    </>
  );
}

export default Gallery;
