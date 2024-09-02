import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './App.css';

import React from 'react';

import Header from './components/Header.jsx';
import Modals from "./components/Modals.jsx";
import Home from "./components/Home.jsx";

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="App">
        <Header />
        <Home />
        <Modals />
      </div>
    </QueryClientProvider>
  );
}

export default App;
