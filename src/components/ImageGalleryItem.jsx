import React from "react";

export const ImageGalleryItem = ({ webformatURL, modalOpen, largeImageURL }) => {
 
  return (
    <li  className="gallery-item" onClick={() => modalOpen(largeImageURL)}>
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  )
};

