import "./App.scss";
import EtfGold from "./Stock/EtfGold";
import Crypto from "./Crypto/Crypto";
import {useState} from "react";
import Summary from "./Summary/Summary";
import WaterMark from "./UI/WaterMark";
import logo from "./assets/youtubelogo.svg";


function deleteCookies() {
    var theCookies = document.cookie.split(';');
    for (var i = 0; i < theCookies.length; i++) {
        document.cookie = theCookies[i].split('=')[0] + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}


function App() {
    const [totalStock, setTotalStock] = useState(0);
    const [totalCrypto, setTotalCrypto] = useState(0);
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
                <WaterMark/>
            </div>
            <Summary totalCrypto={totalCrypto} totalStock={totalStock}/>
            <EtfGold onSum={setTotalStock}/>
            <Crypto onSum={setTotalCrypto}/>
            <div className="imprint">
                <a onClick={() => setShowImprint(true)}>Impressum</a>
            </div>
        </div>
    );
}

export default App;
