import React, { Component } from "react";

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

export class App extends Component {
  state = {
    picture: '',
    page: 1,
    picArray: [],
    isLoading: false,
    isOpen: false,
    largeImage: ''
  };

  modalOpen = (image) => {
    this.setState({
      isOpen: true,
      largeImage: image
    })
  }

  modalСlose = () => {
    this.setState({
      isOpen: false
    })
  }

  // fixed code 
  componentDidUpdate (prevProps, prevState) {
    console.log("componentDidUpdate", prevState, this.state);
    if (prevState.picture !== this.state.picture || prevState.page !== this.state.page) {
        fetchPicture(this.state.picture, this.state.page)
        .then(res => {
          this.setState({
            picArray: this.state.page ===1 ? res.hits : [...prevState.picArray, ...res.hits],
            isLoading: false,
          });
        })
     }
  }

  formSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements[1].value;
    this.setState({
      picture: value,
      isLoading: true,
      page: 1,
      picArray : [],
    });

    // setTimeout(() => {
      // fetchPicture(value, this.state.page)
      //   .then(res => {
      //     this.setState({
      //       picArray: res.hits,
      //       isLoading: false,
      //     });
      //   })
    // }, 1000);
  };

  handleClick = () => {
    this.setState(prev => ({
      // picArray: [...prev.picArray, ...res.hits],
      page: prev.page + 1,
    }));

    // fetchPicture(this.state.picture, this.state.page + 1)
    //   .then(res => {
    //     this.setState(prev => ({
    //       picArray: [...prev.picArray, ...res.hits],
    //       page: prev.page + 1,
    //     }));
    //   });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery
          picArray={this.state.picArray}
          modalOpen={this.modalOpen}
        />
        {
          Boolean(this.state.picArray.length) && (
            <Button handleClick={this.handleClick} />
          )
        }
        <Loader isLoading={this.state.isLoading} />
        <ModalWindow
          isOpen={this.state.isOpen}
          closeModal={this.modalСlose}
          largeImage={this.state.largeImage}
        />
      </>
    )
  }
};

