import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import './App.css';

import LoginButton from './components/LoginButton.jsx';
import React, { useState, useEffect } from 'react';
import ModalWrongChain from './components/ModalWrongChain.jsx';

import { isBadNetworkBis } from "./utils/ClientsAdapter.js";

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
            <LoginButton isBadNetworkCallback = { handleWrongChain }/>
        </header>
        <div>
          <ModalWrongChain isOpen={ isBadNetwork } onClose={ closeModal }/>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
