"use client";
import { LoginButton } from "./LoginButton.jsx";
// import { useState } from "react";
// import { initClient, getAddress, getBalance, isBadNetwork } from "../utils/ClientsAdapter.js";

// import { formatEther } from "viem";


export default function Header() {
    return (
        <header>
            <h1>BUSD-Dashboard</h1>
            <LoginButton/>
        </header>
    );
}

