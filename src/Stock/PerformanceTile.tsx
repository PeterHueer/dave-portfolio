import {StockItem} from "./ParqetLoader";
import classNames from "classnames";
import CountUp from "react-countup";
import ReactTooltip from 'react-tooltip';

export default function PerformanceTile(props: {
  stock: StockItem;
  isCrypto: boolean;
}) {
  const {
    gainGross,
    value,
    purchaseValue
  } = props.stock.performance;

  const {
    asset: {
      identifier
    }, logo
  } = props.stock;


  const cryptoNameResolver = (short: string) => {
    switch (short) {
      case "BTC":
        return "Bitcoin";
      case "ETH":
        return "Ethereum";
    }
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="chart"></figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={logo} alt="Placeholder image"/>
            </figure>
          </div>
          <div className="media-content">
            <p
              className="title is-6">{props.isCrypto ? cryptoNameResolver(identifier) : props.stock.sharedAsset?.name}</p>
            <p className="subtitle is-6">{props.isCrypto ? identifier : `ISIN: ${identifier}`}</p>
          </div>
        </div>

        <div className="content">
          <div className="stock-data">
            <div className="pricing">
              <span data-tip={`Einzahlungsdatum: ${new Date(props.stock.startQuote.datetime).toLocaleDateString()}`}
                    className="stock-title tag">Eingezahlt:</span>
              <span>{purchaseValue.toLocaleString()}€</span>
              <ReactTooltip/>
            </div>
            <div className="pricing">
              <span className="stock-title tag">Aktuell:</span>
              <span>{props.stock.position.currentValue.toLocaleString()}€</span>
            </div>
          </div>
          <div className="performance">
            <span
              className={classNames({
                "is-success": value > purchaseValue,
                "is-danger": purchaseValue > value
              })}
            >
              <CountUp
                duration={0.8}
                end={value - purchaseValue}
                decimal=","
                decimals={2}
                suffix=" €"
              />
               <div className="font-small">
                (<CountUp
                 duration={0.8}
                 end={(value * 100 / purchaseValue - 100)}
                 decimal=","
                 decimals={2}
                 suffix=" %"
               />)
            </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
