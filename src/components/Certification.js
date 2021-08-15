import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AboutButton from './styled/AboutButton';

const customStyles = {
  content: {
    top: '50%',
    width:'50rem',
    height:'35rem',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function Certification() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="certification" style={{position:'relative'}}>
      <button onClick={openModal}>Certification</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}style={{color:'#E52885',textAlign:'center'}}>Certification</h2>
        <button onClick={closeModal} style={{position:'absolute',right:'0',top:'0'}}>
            <i class="fas fa-times" style={{fontSize:'2.5rem',backgroundColor:'white',color:'red'}}></i></button>
        <div>I am a modal</div>
        <form>
        </form>
      </Modal>
    </div>
  );
}

export default Certification;