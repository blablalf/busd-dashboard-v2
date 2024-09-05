import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";

import React from "react";

import Header from "./components/Header/Header.jsx";
import Modals from "./components/Modals.jsx";
import Home from "./components/Home/Home.jsx";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Home />
        <Modals />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
