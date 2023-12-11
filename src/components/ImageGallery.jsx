import React from "react";
import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = ({picArray, modalOpen}) => {
  // const { picArray } = props;
  return (
    <ul className="gallery">
      {picArray.map(({id, webformatURL, largeImageURL}) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          modalOpen={modalOpen}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  )
}
