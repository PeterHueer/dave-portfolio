import "./App.scss";
import EtfGold from "./EtfGold";
import Crypto from "./Crypto";
import { useState } from "react";
import Summary from "./Summary";


function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="app">
      <Summary total={total}/>
      <EtfGold onSum={(sum) => setTotal((prev) => prev + sum)}/>
      <Crypto onSum={(sum) => setTotal((prev) => prev + sum)}/>
    </div>
  );
}

export default App;
