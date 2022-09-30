import "./App.scss";
import Stocks from "./Stock/Stocks";
import {useState} from "react";
import Summary from "./Summary/Summary";
import WaterMark from "./UI/WaterMark";
import logo from "./assets/youtubelogo.svg";
import paypal from "./assets/paypal.png";


function Donate() {
  const [thanks, setThanks] = useState("Eine kleine Kaffee-Spende ♥️");
  return (
    <a href="https://paypal.me/peterhuer" target="_blank" className="donate" onMouseOver={() => setThanks("Danke dir mein lieber ♥️")} onMouseLeave={() => setThanks("Eine kleine Kaffee-Spende ♥️")}>
      <img src={paypal}></img>
      {thanks}
    </a>
  );
}

function deleteCookies() {
    var theCookies = document.cookie.split(';');
    for (var i = 0; i < theCookies.length; i++) {
        document.cookie = theCookies[i].split('=')[0] + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}


function App() {
    const [totalStock, setTotalStock] = useState(0);
    const [showImprint, setShowImprint] = useState(false);
    deleteCookies();

    if (showImprint) {
        return (
            <div className="imprint-page">
                <a onClick={() => setShowImprint(false)}>Zurück zur Webseite</a>
                <h1>Impressum</h1>

                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p>Peter H&uuml;er<br/>
                    Espeler Stra&szlig;e 19<br/>
                    49838 Langen</p>

                <h2>Kontakt</h2>
                <p>Telefon: 01711064990<br/>
                    E-Mail: peterprog707@gmail.com</p>

                <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
            </div>
        )
    }

    return (
        <div className="app">
            <div className="header">
              <div className="header">
                <a
                  className="making-of"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=x-cSqC5NRlE"
                >
                  <img className="youtube" src={logo}/>
                  <i>
                    Hier zum <b> Making Of </b> von der Webseite
                  </i>
                </a>
                <WaterMark/>
              </div>
                <WaterMark/>
            </div>
            <Summary totalStock={totalStock}/>
            <Stocks onSum={setTotalStock}/>
          <div className="center">
            <Donate />
          </div>
            <div className="imprint">
                <a onClick={() => setShowImprint(true)}>Impressum</a>
            </div>
        </div>
    );
}

export default App;
