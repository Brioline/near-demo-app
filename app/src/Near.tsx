import React from "react";
import { useWeb3ApiClient } from "@web3api/react";

export default function Near() {
  const client = useWeb3ApiClient();

  const getData = async () => {
    const plugins = await client.getPlugins();
    console.log(plugins); 
    const res = await client.resolveUri("ipfs/QmVLHmBaAqzELwSypKqd6eD2SepHY6A8nm28wjcUtgdoko");
    console.log("res", res);
    /*
    const query = await client.query({
      uri: "ens/near-api.web3api.eth",
      query: `query {
        formatNearAmount(
            amount: $amount
          )`,
      variables: {
        amount: "9999989999999998370878870000000",
      },
    });
    console.log("query", query); 
    */
  };

  const onGetData = (e: any) => {
    e.preventDefault();
    getData()
  };

  return (
    <div>
      <button onClick={onGetData}> get Data</button>
    </div>
  );
}
