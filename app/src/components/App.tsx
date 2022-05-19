import React from "react";
import "./App.css";
import { Web3ApiProvider } from "@web3api/react";
import Near from "./Near";
import { getPlugins } from "../utils";

function App() {
  return (
    // @ts-ignore
    <Web3ApiProvider plugins={getPlugins()}>
      <Near />
    </Web3ApiProvider>
  );
}

export default App;
