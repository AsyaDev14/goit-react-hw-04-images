import React, { useState, useEffect } from "react";

import Modal from 'react-modal';
import './styles.css';
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";
import { Loader } from "./Loader";
import { fetchPicture } from "api/api";
import { ModalWindow } from "./Modal";

//  33816653-3cca4f3926f281165d337bdaa (my API KEY)
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12 (URL-рядок HTTP-запиту)
// API > [{}] >
// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

// Set the root element for the modal
Modal.setAppElement('#root');

export const App = () => {
  // state = {
  //   picture: '',
  //   page: 1,
  //   picArray: [],
  //   isLoading: false,
  //   isOpen: false,
  //   largeImage: ''
  // };

  const [picture, setPicture] = useState('')
  const [page, setPage] = useState(1)
  const [picArray, setPicArray] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [largeImage, setLargeImage] = useState('')

  const modalOpen = (image) => {
    // this.setState({
    //   isOpen: true,
    //   largeImage: image
    // })
    setOpen(true);
    setLargeImage(image);
  };

  const modalСlose = () => {
    // this.setState({
    //   isOpen: false
    // })
    setOpen(false)
  };




  useEffect(() => {
    if (!picture) return;
    fetchPicture(picture, page)
      .then(res => {
        console.log("res", res)
        if (page === 1) {
          setPicArray(res)
        } else {
          setPicArray(prev => ([...prev, ...res]))
        }
        setLoading(false)
      })

  }, [picture, page])


  const formSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements[1].value;
    if (picture !== value) {   
      setPicture(value);
      setLoading(true);
      setPage(1);
    }
    // setPicArray([]);
  };

  const handleClick = () => {
    setPage(prev => prev + 1);
  };

 
  return (
    <>
      <Searchbar onSubmit={formSubmit} />
      <ImageGallery
        picArray={picArray}
        modalOpen={modalOpen}
      />
      {
        Boolean(picArray.length) && (
          <Button handleClick={handleClick} />
        )
      }
      <Loader isLoading={isLoading} />
      <ModalWindow
        isOpen={isOpen}
        closeModal={modalСlose}
        largeImage={largeImage}
      />
    </>
  )
};

