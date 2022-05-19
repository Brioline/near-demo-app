import React, { useState } from "react";
import { useQuery } from "../utils/hooks";
import { Near_Queries } from "../utils/queries";
import { BlockResult } from "../utils/types";

export default function Near() {
  //wallet
  const [, requestSignIn] = useQuery<{
    requestSignIn: any;
  }>(Near_Queries.requestSignIn);

  const [, signOut] = useQuery<{
    signOut: any;
  }>(Near_Queries.signOut);

  const [, isSignedIn] = useQuery<{
    isSignedIn: any;
  }>(Near_Queries.isSignedIn);

  const [, getAccountId] = useQuery<{
    getAccountId: any;
  }>(Near_Queries.getAccountId);

  // Transaction
  const [, signAndSendTransaction] = useQuery<{
    signAndSendTransaction: any;
  }>(Near_Queries.signAndSendTransaction);
  const [, createsTransactionWithoutWallet] = useQuery<{
    createsTransactionWithoutWallet: any;
  }>(Near_Queries.createsTransactionWithoutWallet);

  const [, signsTransactionWithoutWallet] = useQuery<{
    signsTransactionWithoutWallet: any;
  }>(Near_Queries.signsTransactionWithoutWallet);

  const [, signAndSendTransactionAsync] = useQuery<{
    signAndSendTransactionAsync: any;
  }>(Near_Queries.signAndSendTransactionAsync);

  // Queries
  const [formatInput, setFormatInput] = useState(
    "9999989999999998370878870000000"
  );
  const [parseInput, setParseInput] = useState("0.000008999999999837087887");

  const [, format] = useQuery<{
    formatNearAmount: string;
  }>(Near_Queries.formatNearAmount, {
    amount: formatInput,
  });

  const [, parse] = useQuery<{ parseNearAmount: string }>(
    Near_Queries.parseNearAmount,
    {
      amount: parseInput,
    }
  );

  const [, getBlock] = useQuery<{ getBlock: any /* BlockResult */ }>(
    Near_Queries.getBlock
  );

  const [, getAccountState] = useQuery<{
    getAccountState: any /* BlockResult */;
  }>(Near_Queries.getStatus);

  const [, getGasPrice] = useQuery<{
    gasPrice: BlockResult /* BlockResult */;
  }>(Near_Queries.getGasPrice);

  const [, getStatus] = useQuery<{
    getStatus: any /* BlockResult */;
  }>(Near_Queries.getStatus);

  const [, getExperimental_protocolConfig] = useQuery<{
    getExperimental_protocolConfig: any /* BlockResult */;
  }>(Near_Queries.getExperimental_protocolConfig);

  const [, getChunk] = useQuery<{
    getChunk: any /* BlockResult */;
  }>(Near_Queries.getChunk);

  const [, getContractCodeChanges] = useQuery<{
    getContractCodeChanges: any /* BlockResult */;
  }>(Near_Queries.getContractCodeChanges);

  const [, getBlockChanges] = useQuery<{
    getBlockChanges: any /* BlockResult */;
  }>(Near_Queries.getBlockChanges);

  const [, getLightClientProof] = useQuery<{
    getLightClientProof: any /* BlockResult */;
  }>(Near_Queries.getLightClientProof);

  const [, getAccessKeyChanges] = useQuery<{
    getAccessKeyChanges: any /* BlockResult */;
  }>(Near_Queries.getAccessKeyChanges);

  const [, getAccountChanges] = useQuery<{
    getAccountChanges: any /* BlockResult */;
  }>(Near_Queries.getAccountChanges);

  const [, getContractStateChanges] = useQuery<{
    getContractStateChanges: any /* BlockResult */;
  }>(Near_Queries.getContractStateChanges);

  const [, getSingleAccessKeyChanges] = useQuery<{
    getSingleAccessKeyChanges: any /* BlockResult */;
  }>(Near_Queries.getSingleAccessKeyChanges);

  const [, getTxStatus] = useQuery<{
    getTxStatus: any /* BlockResult */;
  }>(Near_Queries.getTxStatus);

  const [formatted, setFormatted] = useState<string>("");

  const [parsed, setParsed] = useState<string>("");
  // wallet
  const onRequestSignIn = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await requestSignIn();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onSignOut = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await signOut();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onIsSignedIn = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await isSignedIn();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetAccountId = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getAccountId();
    data && console.log(data);
    errors && console.log(errors);
  };
  //transaction
  const onSignAndSendTransaction = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await signAndSendTransaction();
    data && console.log(data);
    errors && console.log(errors);
  };
  const onCreatesTransactionWithoutWallet = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await createsTransactionWithoutWallet();
    data && console.log(data);
    errors && console.log(errors);
  };
  const onSignsTransactionWithoutWallet = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await signsTransactionWithoutWallet();
    data && console.log(data);
    errors && console.log(errors);
  };
  const onSignAndSendTransactionAsync = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await signAndSendTransactionAsync();
    data && console.log(data);
    errors && console.log(errors);
  };
  //QUERIES
  const onFormat = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await format();
    if (data?.formatNearAmount) {
      console.log(data.formatNearAmount);
      setFormatted(data.formatNearAmount);
    }
    errors && console.log(errors);
  };

  const onGetTxStatus = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getTxStatus();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetSingleAccessKeyChanges = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getSingleAccessKeyChanges();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetContractStateChanges = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getContractStateChanges();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetContractCodeChanges = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getContractCodeChanges();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetAccountChanges = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getAccountChanges();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetAccessKeyChanges = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getAccessKeyChanges();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetLightClientProof = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getLightClientProof();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetExperimental_protocolConfig = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getExperimental_protocolConfig({
      blockReference: {
        finality: "final",
        block_id: null,
      },
    });
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetChunk = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getChunk();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetGasPrice = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getGasPrice();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetBlockChanges = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getBlockChanges({
      blockQuery: { block_id: "12", finality: null, syncCheckpoint: null },
    });
    data && console.log(data);
    errors && console.log(errors);
  };

  const onParse = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await parse();
    if (data) {
      console.log(data);
      //@ts-ignore
      setParsed(data?.parseNearAmount);
    }
    errors && console.log(errors);
  };

  const onGetBlock = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getBlock({ blockQuery: { block_id: "12" } });
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetStatus = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getStatus();
    data && console.log(data);
    errors && console.log(errors);
  };

  const onGetAccountState = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await getAccountState({
      accountId: "polydev.testnet",
    });
    data && console.log(data);
    errors && console.log(errors);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <input
          value={formatInput}
          onChange={(e) => setFormatInput(e.target.value)}
        />
        <button onClick={onFormat}>Format</button>
        {formatted && (
          <span style={{ padding: "2px", border: "1px solid black" }}>
            {formatted}
          </span>
        )}
      </div>
      <br />

      <div>
        <input
          value={parseInput}
          onChange={(e) => setParseInput(e.target.value)}
        />
        <button onClick={onParse}>Parse</button>
        {parsed && (
          <span style={{ padding: "2px", border: "1px solid black" }}>
            {parsed}
          </span>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <button onClick={onGetAccountState}>getAccountState</button>
        <button onClick={onGetStatus}>getStatus</button>
        <button onClick={onGetGasPrice}>getGasPrice</button>
        <button onClick={onGetExperimental_protocolConfig}>
          getExperimental_protocolConfig
        </button>
        <button onClick={onGetChunk}>getChunk</button>
      </div>
      <button onClick={onGetBlock}>getBlock</button>
      {/* <button onClick={onGetBlockChanges}>getBlockChanges</button> */}
    </div>
  );
}
