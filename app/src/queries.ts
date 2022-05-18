import { Web3ApiClient } from "@web3api/client-js";
import { BlockChangeResult, BlockQuery, NodeStatusResult } from "./types";

const client = new Web3ApiClient();
const apiUri = "ens/near-api.eth";

export const status = async () => {
  return await client.query<{ status: NodeStatusResult }>({
    uri: apiUri,
    query: `query {
    status
  }`,
  });
};

export const gasPrice = async (blockId: string) => {
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

export const blockChanges = async (blockQuery: BlockQuery) => {
  return await client.query<{ blockChanges: BlockChangeResult }>({
    uri: apiUri,
    query: `query {
    blockChanges(
      blockQuery: $blockQuery
    )
  }`,
    variables: {
      blockQuery: blockQuery,
    },
  });
};
