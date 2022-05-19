import { Web3ApiClient } from "@web3api/client-js";
import { Transaction, Action, FinalExecutionOutcome } from "./types";
import * as nearApi from "near-api-js";
const client = new Web3ApiClient();
const apiUri = "ens/near-api.eth";


export const createsTransactionWithoutWallet = async (contractId: string, actions: Action[], workingAccount: nearApi.Account) => {
   await client.query<{ createTransaction: Transaction }>({
      uri: apiUri,
      query: `query {
        createTransaction(
          receiverId: $receiverId
          actions: $actions
          signerId: $signerId
        )
      }`,
      variables: {
        receiverId: contractId,
        actions: actions,
        signerId: workingAccount.accountId,
      },
    })
  };

  export const SignsTransactionWithoutWallet = async (contractId: string, actions: Action[], workingAccount: nearApi.Account) => {
    await client.query<{ createTransaction: Transaction }>({
       uri: apiUri,
       query: `query {
       createTransaction(
           receiverId: $receiverId
           actions: $actions
           signerId: $signerId
       )
       }`,
       variables: {
       receiverId: contractId,
       actions: actions,
       signerId: workingAccount.accountId,
      },
    });
  };


  export const   signAndSendTransaction = async (contractId: string, actions: Action[], workingAccount: nearApi.Account) => {
    await client.query<{
    signAndSendTransaction: FinalExecutionOutcome;
        }>({
        uri: apiUri,
        query: `mutation {
            signAndSendTransaction(
            receiverId: $receiverId
            actions: $actions
            signerId: $signerId
            )
        }`,
        variables: {
            receiverId: contractId,
            actions: actions,
            signerId: workingAccount.accountId,
        },
     });
  };
  
  export const signAndSendTransactionAsync = async (contractId: string, actions: Action[], workingAccount: nearApi.Account) => {
     await client.query<{ signAndSendTransactionAsync: string }>({
        uri: apiUri,
        query: `mutation {
          signAndSendTransactionAsync(
            receiverId: $receiverId
            actions: $actions
            signerId: $signerId
          )
        }`,
        variables: {
          receiverId: contractId,
          actions: actions,
          signerId: workingAccount.accountId,
        },
     });
  };