import React from "react";
import './Modal.css';
import InputForm from '../InputForm/InputForm.jsx';

function Modal(props) {
    const {
      isOpen,
      closeModal,
      submitData,
      currentItem

    } = props;
    
    if (!isOpen) {
      return null;
    }
    
    const onAddSuccess = (arg) => {
      submitData(arg);
    }
  return (

      <>
      <div className="modal-overlay">
                <div className="modal-content">
                <div className="btn"><button onClick={closeModal}>X</button></div>
                <InputForm onAddSuccess={onAddSuccess} currentItem = {currentItem} />
                </div>
      </div>
        
      </>   
);
    }

    export default Modal;