import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Display from '../components/Gallery/Display'
import Navigation from '../components/Navigation'
import Overview from '../components/Gallery/Overview'
import { base } from '../util'

function Gallery () {
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState('')

  function handleImageClick (img) {
    setSelectedImage(img)
  }

  function handleOverviewExit () {
    setSelectedImage('')
  }

  useEffect(() => {
    base('gallery')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setImages(records[0].fields.images)
        fetchNextPage()
      })
  }, [])

  return (
    <>
      <Navigation gallery />
      <Display images={images} handleImageClick={handleImageClick} />
      {selectedImage && (
        <Overview
          handleOverviewExit={handleOverviewExit}
          overviewImg={selectedImage}
        />
      )}
      <Footer />
    </>
  )
}

export default Gallery
