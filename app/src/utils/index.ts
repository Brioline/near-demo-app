import { nearPlugin } from "near-polywrap-js";


export const apiUri = "ipfs/QmT87bNe4f6YRSquuzWbcRC3X7ve6iF32n2Ehudzbkfmpm"

export const getPlugins = () => {
  return [
    {
      uri: "ens/nearPlugin.web3api.eth",
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
