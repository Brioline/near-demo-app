import { nearPlugin } from "near-polywrap-js";

export const getPlugins = () => {
  return [
    {
      uri: "w3://ens/nearPlugin.web3api.eth",
      plugin: nearPlugin({
        headers: {},
        networkId: "testnet",
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
      }),
    },
  ];
};
