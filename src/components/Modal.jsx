import React from "react";
import Modal from 'react-modal';

export const ModalWindow = ({isOpen, closeModal, largeImage}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="Modal"
    >
      <img src={largeImage} className="largeImg" alt=""/>
    </Modal>
  )
}


