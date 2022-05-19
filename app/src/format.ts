import { Web3ApiClient } from "@web3api/client-js";
const client = new Web3ApiClient();
const apiUri = "ens/near-api.eth";


export const formatNearAmount = async (amount: string) => {
    await client.query<{ formatNearAmount: string }>({
        uri: apiUri,
        query: `query {
            formatNearAmount(
            amount: $amount
          )
        }`,
        variables: {
          amount: amount,
        },
      });
};


export const parseNearAmount = async (amount: string) => {
    await client.query<{ parseNearAmount: BigInt }>({
        uri: apiUri,
        query: `query {
          parseNearAmount(
            amount: $amount
          )
        }`,
        variables: {
          amount: amount,
        },
    });
};

