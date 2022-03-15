import "./App.scss";
import EtfGold from "./Stock/EtfGold";
import Crypto from "./Crypto/Crypto";
import { useState } from "react";
import Summary from "./Summary/Summary";
import WaterMark from "./UI/WaterMark";
import logo from "./assets/youtubelogo.svg";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="app">
      <div className="header">
        <a
          className="making-of"
          target="_blank"
          href="https://www.youtube.com/watch?v=x-cSqC5NRlE"
        >
          <img className="youtube" src={logo} />
          <i>
            Hier zum <b> Making Of </b> von der Webseite
          </i>
        </a>
        <WaterMark />
      </div>
      <Summary total={total} />
      <EtfGold onSum={(sum) => setTotal((prev) => prev + sum)} />
      <Crypto onSum={(sum) => setTotal((prev) => prev + sum)} />
    </div>
  );
}

export default App;
