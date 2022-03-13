import { useLoadCrypto } from "./CryptoLoader";
import Hero from "../UI/Hero";
import CryptoPerfomanceTile from "./CryptoPerfomanceTile";
import ProgressSpinner from "../UI/ProgressSpinner";
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
