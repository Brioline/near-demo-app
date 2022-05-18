import React from "react";
import "./App.css";
import { Web3ApiProvider } from "@web3api/react";
import Near from "./Near";

import { ethereumPlugin } from "@web3api/ethereum-plugin-js";
import { ipfsPlugin } from "@web3api/ipfs-plugin-js";
//import { ensPlugin } from "@web3api/ens-plugin-js";

function App() {
  const plugins = [
    {
      uri: "ens/ipfs.web3api.eth",
      plugin: ipfsPlugin({
        provider: "http://localhost:8080",
      }),
    },
    {
      uri: "ens/ethereum.web3api.eth",
      plugin: ethereumPlugin({
        networks: {
          mainnet: {
            provider: "http://localhost:8545",
          },
        },
      }),
    },
    /*         {
      uri: "w3://ens/ens.web3api.eth",
      plugin: ensPlugin({
        addresses: {
          testnet: "0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab",
        },
      }),
    }, */
  ];

  return (
    // @ts-ignore
    <Web3ApiProvider plugins={plugins}>
      <Near />
    </Web3ApiProvider>
  );
}

export default App;
