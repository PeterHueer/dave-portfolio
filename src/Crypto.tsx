import { useLoadCrypto } from "./CryptoLoader";
import Hero from "./Hero";
import CryptoPerfomanceTile from "./PerfomanceTile/CryptoPerfomanceTile";
import ProgressSpinner from "./ProgressSpinner";
import "./App.scss";
import { useEffect, useState } from "react";

export default function Crypto(props: {
  onSum: (sum: number) => void;
}) {
  const { btc, eth } = useLoadCrypto();
  const [total, setTotal] = useState(0);

  useEffect(() => {
      props.onSum(total);
  }, [total])


  return btc && eth ? (
    <Hero title="Krypto">
      <CryptoPerfomanceTile
        crypto={btc}
        onSum={(sum) => setTotal((prev) => prev + sum)}
      ></CryptoPerfomanceTile>
      <CryptoPerfomanceTile
        crypto={eth}
        onSum={(sum) => setTotal((prev) => prev + sum)}
      ></CryptoPerfomanceTile>
    </Hero>
  ) : (
    <ProgressSpinner />
  );
}
