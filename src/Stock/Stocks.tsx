import {useEffect} from "react";
import Hero from "../UI/Hero";
import {StockItem, useGetStockData} from "./ParqetLoader";
import PerformanceTile from "./PerformanceTile";
import ProgressSpinner from "../UI/ProgressSpinner";

export default function Stocks(props: { onSum: (sum: number) => void }) {
  const {data} = useGetStockData();

  useEffect(() => {
    props.onSum(data ? data.performance.value - data.performance.purchaseValue : 0);
  }, [data]);

  const isCrypto = (holding: StockItem) => holding.asset.assetType === "Crypto";
  const crypto = data?.holdings.filter(isCrypto);
  const etfGold = data?.holdings.filter((f) => !isCrypto(f));

  return crypto && etfGold ? (
    <>
      <Hero title="ETF & Gold">
        {etfGold.map((stockItem) => (
          <PerformanceTile
            key={stockItem.asset.identifier}
            stock={stockItem}
            isCrypto={isCrypto(stockItem)}
          ></PerformanceTile>
        ))}
      </Hero>
      <Hero title="Krypto">
        {crypto.map((cryptoItem) => (
          <PerformanceTile
            key={cryptoItem.asset.identifier}
            stock={cryptoItem}
            isCrypto={isCrypto(cryptoItem)}
          ></PerformanceTile>
        ))}
      </Hero>
    </>
  ) : (
    <ProgressSpinner/>
  );
}
