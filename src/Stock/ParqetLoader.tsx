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
  logo: string;
  isin: string;
}

export interface StockItem {
  position: StockPosition;
  security: Security;
  performance: Performance;
}

export interface StockData {
  holdings: StockItem[];
  performance: {gainGross: number};
}

export const useGetStockData = () => {
  const [data, setData] = useState<StockData>();
  useEffect(() => {
    fetch("https://api.parqet.com/v1/portfolios/622dc3d17a565e4cd92a9c1e")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(setData);
  }, []);
  return { data };
};
