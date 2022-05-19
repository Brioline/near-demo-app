export enum Near_Queries {
  createsTransactionWithoutWallet,
  signsTransactionWithoutWallet,
  signAndSendTransaction,
  signAndSendTransactionAsync
}

export const queries: Record<string, string> = {
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
  [Near_Queries.signAndSendTransaction]: `mutation {
    signAndSendTransaction(
     receiverId: $receiverId
     actions: $actions
     signerId: $signerId
    )
  }`,
};
