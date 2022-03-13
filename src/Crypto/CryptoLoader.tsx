import { useEffect, useState } from "react";
import btcLogo from "../assets/btc.png";
import ethLogo from "../assets/eth.png";

export interface CryptoItem {
  spent: number;
  value: number;
  logo: string;
  name: string;
  purchaseValue: number;
  id: string;
}

export interface Crypto {
  btc?: CryptoItem;
  eth?: CryptoItem;
}

export const useLoadCrypto = (): Crypto => {
  const [eth, setEth] = useState<CryptoItem>();
  const [btc, setBtc] = useState<CryptoItem>();

  useEffect(() => {
    fetch("https://api.coinbase.com/v2/prices/spot?currency=EUR")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(({ data }) =>
        setBtc({
          value: data.amount,
          spent: 7000,
          logo: btcLogo,
          id: "btc",
          name: "Bitcoin",
          purchaseValue: 33174.12,
        })
      );
    fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(({ data }) =>
        setEth({
          value: data.rates.EUR,
          spent: 3082,
          logo: ethLogo,
          id: "eth",
          name: "Ethereum",
          purchaseValue: 2308.71,
        })
      );
  }, []);
  return { btc, eth };
};
