import {useEffect, useState} from "react";

interface StockPosition {
  allocation: number;
  currentPrice: number;
  currentValue: number;
  purchasePrice: number;
  purchaseValue: number;
  shares: number;
}

interface Performance {
  gainGross: number;
  purchaseValue: number;
  value: number;
}

interface SharedAsset {
  name: string;
  security: {
    isin: string;
  }
}

interface Asset {
  identifier: string;
  assetType: string;
}

interface StartQuote {
  datetime: string;
}

export interface StockItem {
  position: StockPosition;
  sharedAsset?: SharedAsset;
  startQuote: StartQuote;
  asset: Asset;
  performance: Performance;
  logo: string;
}

export interface StockData {
  holdings: StockItem[];
  performance: { gainGross: number, value: number, purchaseValue: number };
}

export const useGetStockData = () => {
  const [data, setData] = useState<StockData>();
  useEffect(() => {
    fetch("https://api.parqet.com/v1/portfolios/assemble", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        portfolioIds: [
          "63372c07a95d112cb413d2c7"
        ],
        holdingId: [],
        assetTypes: [],
        timeframe: "max"
      })
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(setData);
  }, []);
  return {data};
};
