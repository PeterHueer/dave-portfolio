import { useEffect, useState } from "react";

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

interface Security {
  name: string;
  isin: string;
}

interface Asset {
  identifier: string;
  assetType: string;
}

export interface StockItem {
  position: StockPosition;
  security?: Security;
  asset: Asset;
  performance: Performance;
  logo: string;
}

export interface StockData {
  holdings: StockItem[];
  performance: {gainGross: number};
}

export const useGetStockData = () => {
  const [data, setData] = useState<StockData>();
  useEffect(() => {
    fetch("https://api.parqet.com/v1/portfolios/63372c07a95d112cb413d2c7")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(setData);
  }, []);
  return { data };
};
