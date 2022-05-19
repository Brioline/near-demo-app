export enum Near_Queries {
  requestSignIn,
  signOut,
  isSignedIn,
  getAccountId
}

export const queries: Record<string, string> = {
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
 

