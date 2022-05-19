export enum Near_Queries {
  formatNearAmount,
  parseNearAmount,
  getBlock,
  getAccountState,
  getStatus,
  getGasPrice,
  getBlockChanges,
  getExperimental_protocolConfig,
  getChunk,
  getLightClientProof,
  getAccessKeyChanges,
  getAccountChanges,
  getContractCodeChanges,
  getContractStateChanges,
  getSingleAccessKeyChanges,
  getTxStatus,
  createsTransactionWithoutWallet,
  signsTransactionWithoutWallet,
  signAndSendTransaction,
  signAndSendTransactionAsync,
  requestSignIn,
  signOut,
  isSignedIn,
  getAccountId
}

export const queries: Record<string, string> = {
  [Near_Queries.formatNearAmount]: `query {
    formatNearAmount(
    amount: $amount
  )
}`,
  [Near_Queries.parseNearAmount]: `query {
    parseNearAmount(
      amount: $amount
    )
  }`,
  [Near_Queries.getBlock]: `query {
    getBlock(
      blockQuery: $blockQuery
    )
  }`,
  [Near_Queries.getAccountState]: `query {
    getAccountState(
      accountId: $accountId
    )
  }`, 
  [Near_Queries.getStatus]: `query {
    status
  }`,
  [Near_Queries.getGasPrice]: `query {
    gasPrice(
      blockId: $blockId
    )
  }`,
  [Near_Queries.getBlockChanges]: `query {
    blockChanges(
      blockQuery: $blockQuery
    )
  }`,
  [Near_Queries.getExperimental_protocolConfig]: `query {
    experimental_protocolConfig(
      blockReference: $blockReference
    )
  }`,
  [Near_Queries.getChunk]: `query {
    chunk(
      chunkId:$chunkId
    )
  }`,
  [Near_Queries.getLightClientProof]: `query {
    lightClientProof(
      request: $request
    )
  }`,
  [Near_Queries.getAccessKeyChanges]: `query {
    accessKeyChanges(
      accountIdArray: $accountIdArray
      blockQuery: $blockQuery
    )
  }`,
  [Near_Queries.getAccountChanges]: `query {
    accountChanges(
      accountIdArray: $accountIdArray
      blockQuery: $blockQuery
    )
  }`,
  [Near_Queries.getContractStateChanges]: `query {
    contractStateChanges(
      accountIdArray: $accountIdArray
      blockQuery: $blockQuery
      keyPrefix: $keyPrefix
    )
  }`,
  [Near_Queries.getSingleAccessKeyChanges]: `query {
    singleAccessKeyChanges(
      accessKeyArray: $accessKeyArray
      blockQuery: $blockQuery
    )
  }`,
  [Near_Queries.getTxStatus]: `query {
    txStatus(
      txHash: $txHash
      accountId: $accountId
    )
  }`,
  // transaction
  [Near_Queries.createsTransactionWithoutWallet]: `query {
    createTransaction(
      receiverId: $receiverId
      actions: $actions
      signerId: $signerId
    )
  }`,
  [Near_Queries.signsTransactionWithoutWallet]: `query {
    createTransaction(
       receiverId: $receiverId
       actions: $actions
       signerId: $signerId
   )
  }`,
  [Near_Queries.signAndSendTransaction]: `mutation {
    signAndSendTransaction(
     receiverId: $receiverId
     actions: $actions
     signerId: $signerId
    )
  }`,
  [Near_Queries.signAndSendTransactionAsync]: `mutation {
    signAndSendTransactionAsync(
      receiverId: $receiverId
      actions: $actions
      signerId: $signerId
    )
  }`,
  // wallet
  [Near_Queries.requestSignIn]: `query {
    requestSignIn(
      contractId: $contractId,
      methodNames: $methodNames,
      successUrl: $successUrl,
      failureUrl: $failureUrl,
    )
  }`,
  [Near_Queries.signOut]: `query {
    signOut
  }`,
  [Near_Queries.isSignedIn]: `query {
    isSignedIn
  }`,
  [Near_Queries.getAccountId]: `query {
    getAccountId
  }`,
};
