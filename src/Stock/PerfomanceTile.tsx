import { StockItem } from "./ParqetLoader";
import classNames from "classnames";
import ProgressSpinner from "../UI/ProgressSpinner";

export default function PerfomanceTile(props: {
  stock: StockItem;
  fallbackLogo: string;
}) {
  const {
    gainGross,
    value,
    purchaseValue
  } = props.stock.performance;

  if (props.stock === undefined) {
    return <ProgressSpinner height={100} />;
  }


  const { isin, logo, name } = props.stock.security;

  const formatToCurrency = (value: number) => {
    return `${(Math.round(value * 100) / 100).toLocaleString()} €`;
  };

  return (
    <div className="card">
      <div className="card-image">
        <figure className="chart"></figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={logo ?? props.fallbackLogo} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-6">{name}</p>
            <p className="subtitle is-6">ISIN: {isin}</p>
          </div>
        </div>

        <div className="content">
          <div className="stock-data">
            <div className="pricing">
              <span className="stock-title tag">Einkauf:</span>
              <span>{purchaseValue.toLocaleString()}€</span>
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
              {formatToCurrency(gainGross)} <div className="font-small">({(value * 100 / purchaseValue - 100).toLocaleString()}%)</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
