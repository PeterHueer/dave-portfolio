import "./App.scss";
import EtfGold from "./Stock/EtfGold";
import Crypto from "./Crypto/Crypto";
import { useState } from "react";
import Summary from "./Summary/Summary";
import WaterMark from "./UI/WaterMark";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="app">
      <WaterMark />
      <Summary total={total} />
      <EtfGold onSum={(sum) => setTotal((prev) => prev + sum)} />
      <Crypto onSum={(sum) => setTotal((prev) => prev + sum)} />
    </div>
  );
}

export default App;
