import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import "@radix-ui/themes/styles.css";

import React from "react";

import Header from "./components/Header.jsx";
import Modals from "./components/Modals.jsx";
import Home from "./components/Home.jsx";
import { Toaster } from "react-hot-toast";
import { Theme } from "@radix-ui/themes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme appearance="dark">
        <div className="App">
          <Header />
          <Home />
          <Modals />
          <Toaster />
        </div>
      </Theme>
    </QueryClientProvider>
  );
}

export default App;
