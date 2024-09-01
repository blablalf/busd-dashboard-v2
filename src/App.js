import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

import './App.css';

import React from 'react';

import Header from './components/Header.jsx';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
      </div>
    </QueryClientProvider>
  );
}

export default App;
