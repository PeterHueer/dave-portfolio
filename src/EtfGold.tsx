import React, { useEffect } from "react";
import Hero from "./Hero";
import { StockData, useGetStockData } from "./ParqetLoader";
import PerfomanceTile from "./PerfomanceTile/PerfomanceTile";
import ProgressSpinner from "./ProgressSpinner";

export default function EtfGold(props: { onSum: (sum: number) => void }) {
  const { data } = useGetStockData();

  useEffect(() => {
    props.onSum(data?.performance.gainGross ?? 0);
  }, [data]);

  return data ? (
    <Hero title="ETF & Gold">
      {data.holdings.map((holding) => (
        <PerfomanceTile
          key={holding.security.isin}
          stock={holding}
          fallbackLogo={data.holdings[0].security.logo}
        ></PerfomanceTile>
      ))}
    </Hero>
  ) : (
    <ProgressSpinner />
  );
}
