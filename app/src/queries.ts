import { Web3ApiClient } from "@web3api/client-js";

const client = new Web3ApiClient();
const apiUri = "ens/near-api.eth";

const gasPrice = async (blockId: string) => {
  return await client.query<{ gasPrice: BigInt }>({
    uri: apiUri,
    query: `query {
      gasPrice(
        blockId: $blockId
      )
    }`,
    variables: {
      blockId: blockId,
    },
  });
};
