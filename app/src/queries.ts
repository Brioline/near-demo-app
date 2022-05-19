import { Web3ApiClient } from "@web3api/client-js";
import { BlockChangeResult, 
  BlockQuery,
  NodeStatusResult, 
  NearProtocolConfig, 
  Finality, ChunkResult, 
  BlockResult, 
  LightClientProof, 
  ChangeResult,
  FinalExecutionOutcome
 } from "./types";
 import * as nearApi from "near-api-js";

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

export const experimental_protocolConfig = async () => {
  const blockReference = { finality: "final" as Finality };
  await client.query<{ experimental_protocolConfig: NearProtocolConfig }>({
    uri: apiUri,
    query: `query {
      experimental_protocolConfig(
        blockReference: $blockReference
      )
    }`,
    variables: {
      blockReference: blockReference,
    },
  });
};


export const chunk = async (hash: BlockResult) => {
  await client.query<{ chunk: ChunkResult }>({
    uri: apiUri,
    query: `query {
      chunk(
        chunkId:$chunkId
      )
    }`,
    variables: {
      chunkId: hash,
    },
  });
};


export const lightClientProof = async (wrapper_lightClientProofRequest: LightClientProof) => {
  await client.query<{ lightClientProof: LightClientProof }>({
    uri: apiUri,
    query: `query {
      lightClientProof(
        request: $request
      )
    }`,
    variables: {
      request: wrapper_lightClientProofRequest,
    },
  });
};

export const accessKeyChanges = async (accountIdArray: [nearApi.Account.accountId], blockQuery: nearApi.Account) => {
  await client.query<{ accessKeyChanges: ChangeResult }>({
    uri: apiUri,
    query: `query {
      accessKeyChanges(
        accountIdArray: $accountIdArray
        blockQuery: $blockQuery
      )
    }`,
    variables: {
      accountIdArray: accountIdArray,
      blockQuery: blockQuery,
    },
  });
};

export const accountChanges = async (accountIdArray: [nearApi.Account.accountId], blockQuery: nearApi.Account) => {
  await client.query<{ accountChanges: ChangeResult }>({
    uri: apiUri,
    query: `query {
      accountChanges(
        accountIdArray: $accountIdArray
        blockQuery: $blockQuery
      )
    }`,
    variables: {
      accountIdArray: accountIdArray,
      blockQuery: blockQuery,
    },
  });
};

export const contractCodeChanges = async (accountIdArray: [nearApi.Account.accountId], blockQuery: nearApi.Account) => {
  await client.query<{ contractCodeChanges: ChangeResult }>({
    uri: apiUri,
    query: `query {
      contractCodeChanges(
        accountIdArray: $accountIdArray
        blockQuery: $blockQuery
      )
    }`,
    variables: {
      accountIdArray: accountIdArray,
      blockQuery: blockQuery,
    },
  });
};


export const contractStateChanges = async (accountIdArray: [nearApi.Account.accountId], blockQuery: nearApi.Account, keyPrefix: string) => {
  await client.query<{ contractStateChanges: ChangeResult }>({
    uri: apiUri,
    query: `query {
      contractStateChanges(
        accountIdArray: $accountIdArray
        blockQuery: $blockQuery
        keyPrefix: $keyPrefix
      )
    }`,
    variables: {
      accountIdArray: accountIdArray,
      blockQuery: blockQuery,
      keyPrefix: keyPrefix,
    },
  });
};

export const singleAccessKeyChanges = async (blockQuery: nearApi.Account, networkId: string ) => {
  const accessKeyArray = [
    {
      account_id: nearApi.Account.accountId,
      public_key: (
        await nearApi.Near.connection.signer.getPublicKey(nearApi.Account.accountId, networkId)
      ).toString(),
    },
  ];
  await client.query<{ singleAccessKeyChanges: ChangeResult }>({
    uri: apiUri,
    query: `query {
      singleAccessKeyChanges(
        accessKeyArray: $accessKeyArray
        blockQuery: $blockQuery
      )
    }`,
    variables: {
      accessKeyArray: accessKeyArray,
      blockQuery: blockQuery,
    },
  });
};

export const txStatus = async (accountId: nearApi.Account, txHash: nearApi.providers.FinalExecutionOutcome ) => {
  await client.query<{ txStatus: FinalExecutionOutcome }>({
    uri: apiUri,
    query: `query {
      txStatus(
        txHash: $txHash
        accountId: $accountId
      )
    }`,
    variables: {
      txHash,
      accountId,
    },
  });
};

