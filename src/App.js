import './App.css';
import WalletButton from './Components/WalletButton.js';
import React, { useState } from 'react';
// import Modal from 'react-modal';
import ModalWrongChain from './Components/ModalWrongChain.js';
import Popup from './Components/Popup.js';

// Modal.setAppElement('#root'); // For accessibility

function App() {

  const [isBadNetwork, setIsBadNetwork] = useState(false);

  const handleWrongChain = (_isBadNetwork) => {
    console.log("isBadNetworkApp: " + _isBadNetwork);
    setIsBadNetwork(_isBadNetwork);
  };

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  const closeModal = () => {
    setIsBadNetwork(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {
          <WalletButton isBadNetworkCallback = { handleWrongChain }/>
        }
      </header>
      <div>
        <Popup/>
        <ModalWrongChain isOpen={ isBadNetwork } onClose={closeModal}/>
      </div>
    </div>
  );
}

export default App;
