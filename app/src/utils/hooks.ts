import { QueryApiResult } from "@web3api/client-js";
import { useWeb3ApiQuery } from "@web3api/react";
import { UseWeb3ApiQuery } from "@web3api/react/build/query";
import { Near_Queries, queries } from "./queries";
import { apiUri } from ".";




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
