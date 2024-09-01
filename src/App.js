import './App.css';
import WalletButton from './Components/WalletButton.js';
import React, { useState, useEffect } from 'react';
import ModalWrongChain from './Components/ModalWrongChain.js';

import { isBadNetworkBis } from "./Model/ClientsAdapter.js";

// Modal.setAppElement('#root'); // For accessibility

function App() {

  const [isBadNetwork, setIsBadNetwork] = useState(false);

  const handleWrongChain = (_isBadNetwork) => {
    console.log("isBadNetworkApp: " + _isBadNetwork);
    setIsBadNetwork(_isBadNetwork);
  };

  const closeModal = () => {
    setIsBadNetwork(false);
  };

  useEffect(() => {
    const checkNetwork = async () => {
      const _isBadNetwork = await isBadNetworkBis();
      handleWrongChain(_isBadNetwork);
    };

    const intervalId = setInterval(checkNetwork, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="App">
      <header className="App-header">
          <WalletButton isBadNetworkCallback = { handleWrongChain }/>
      </header>
      <div>
        <ModalWrongChain isOpen={ isBadNetwork } onClose={ closeModal }/>
      </div>
    </div>
  );
}

export default App;
