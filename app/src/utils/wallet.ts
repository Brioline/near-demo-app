
import {  Input_requestSignIn, Input_signOut, Input_isSignedIn, Input_getAccountId } from "./types";

export const requestSignIn = async (contractId: string) => {
  await client.query<{
    requestSignIn: Input_requestSignIn;
      }>({
        uri: apiUri,
        query: `query {
                requestSignIn(
                  contractId: $contractId,
                  methodNames: $methodNames,
                  successUrl: $successUrl,
                  failureUrl: $failureUrl,
              )
            }`,
        variables: {
          contractId: contractId,
          methodNames: ["hello"],
          successUrl: "http://example.com/success",
          failureUrl: "http://example.com/fail",
        },
   });
 };
 
 export const signOut = async () => {
   await client.query<{
        signOut: Input_signOut;
      }>({
        uri: apiUri,
        query: `query {
                signOut
            }`,
        variables: {},
      });
 };


 export const isSignedIn = async () => {
    await client.query<{
        isSignedIn: Input_isSignedIn;
      }>({
        uri: apiUri,
        query: `query {
          isSignedIn
            }`,
        variables: {},
      });
 };

 export const getAccountId = async () => {
    await client.query<{
        getAccountId: Input_getAccountId;
      }>({
        uri: apiUri,
        query: `query {
          getAccountId
            }`,
        variables: {},
    });
 };

