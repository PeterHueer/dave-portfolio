import "./App.scss";
import EtfGold from "./Stock/EtfGold";
import Crypto from "./Crypto/Crypto";
import { useState } from "react";
import Summary from "./Summary/Summary";
import WaterMark from "./UI/WaterMark";
import logo from "./assets/youtubelogo.svg";


function deleteCookies() {
  var theCookies = document.cookie.split(';');
  for (var i = 0 ; i < theCookies.length; i++) {
      document.cookie = theCookies[i].split('=')[0] + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}


function App() {
  const [totalStock, setTotalStock] = useState(0);
  const [totalCrypto, setTotalCrypto] = useState(0);
  deleteCookies();

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
      <Summary totalCrypto={totalCrypto} totalStock={totalStock} />
      <EtfGold onSum={setTotalStock} />
      <Crypto onSum={setTotalCrypto} />
    </div>
  );
}

export default App;
