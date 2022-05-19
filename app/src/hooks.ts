import { QueryApiResult } from "@web3api/client-js";
import { useWeb3ApiQuery } from "@web3api/react";
import { UseWeb3ApiQuery } from "@web3api/react/build/query";
import { apiUri } from "./utils";

export enum Near_Queries {
  formatNearAmount,
  parseNearAmount,
  getBlock,
  getAccountState,
}

const queries: Record<string, string> = {
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
};

export const useQuery = <
  TData extends Record<string, unknown> = Record<string, unknown>
>(
  query: Near_Queries,
  variables = {}
): [
  Partial<UseWeb3ApiQuery<TData>>,
  (variables?: Record<string, unknown>) => Promise<QueryApiResult<TData>>
] => {
  const { execute, data, loading, errors } = useWeb3ApiQuery<TData>({
    uri: apiUri,
    query: queries[query],
    variables: variables,
  });

  return [{ data, loading, errors }, execute];
};
