import { useEffect } from "react";
import Hero from "../UI/Hero";
import { useGetStockData } from "./ParqetLoader";
import PerfomanceTile from "./PerfomanceTile";
import ProgressSpinner from "../UI/ProgressSpinner";

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
