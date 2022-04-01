import { useLoadCrypto } from "./CryptoLoader";
import Hero from "../UI/Hero";
import CryptoPerfomanceTile from "./CryptoPerfomanceTile";
import { useEffect } from "react";

export const calculatePercentage = (value: number, purchaseValue: number) => {
  return ((value - purchaseValue) / value) * 100;
};


export default function Crypto(props: { onSum: (sum: number) => void }) {
  const { btc, eth } = useLoadCrypto();
  useEffect(() => {
    if (btc && eth) {
      const btcTotal = btc.spent * (calculatePercentage(btc.value, btc.purchaseValue) / 100);
      const ethTotal = btc.spent * (calculatePercentage(eth.value, eth.purchaseValue) / 100);
      props.onSum(btcTotal + ethTotal);
    }
  }, [btc, eth]);

  return (
    <Hero title="Krypto">
      <CryptoPerfomanceTile
        crypto={btc}
      ></CryptoPerfomanceTile>
      <CryptoPerfomanceTile
        crypto={eth}
      ></CryptoPerfomanceTile>
    </Hero>
  );
}
