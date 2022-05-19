import React, { useState } from "react";
import { Near_Queries, useQuery } from "./hooks";

export default function Near() {
  const [formatInput, setFormatInput] = useState(
    "9999989999999998370878870000000"
  );
  const [parseInput, setParseInput] = useState("9,999,989.99999999837087887");

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
  }>(Near_Queries.getAccountState);
  const [formatted, setFormatted] = useState<string>("");
  const [parsed, setParsed] = useState<string>("");

  const onFormat = async (e: any) => {
    e.preventDefault();
    const { data, errors } = await format();
    if (data?.formatNearAmount) {
      console.log(data.formatNearAmount);
      setFormatted(data.formatNearAmount);
    }
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
      <button onClick={onGetAccountState}>getAccountState</button>
    </div>
  );
}
