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
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Home />
        <Modals />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
