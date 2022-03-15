import { StockItem } from "../Stock/ParqetLoader";

import classNames from "classnames";
import { CryptoItem } from "./CryptoLoader";
import { useEffect } from "react";
import ProgressSpinner from "../UI/ProgressSpinner";

export default function CryptoPerfomanceTile(props: {
  crypto?: CryptoItem;
  onSum: (sum: number) => void;
}) {
  if (props.crypto === undefined) {
    return <ProgressSpinner height={200} />;
  }

  const { logo, value, id, name, purchaseValue, spent } = props.crypto;

  const formatToCurrency = (value: number) => {
    return `${(Math.round(value * 100) / 100).toLocaleString()} €`;
  };

  const calculatePercentage = (value: number, purchaseValue: number) => {
    return ((value - purchaseValue) / value) * 100;
  };

  useEffect(() => {
    props.onSum(spent * (calculatePercentage(value, purchaseValue) / 100));
  }, [crypto]);

  return (
    <div className="card">
      <div className="card-image">
        <figure className="chart"></figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={logo} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-6">{name}</p>
            <p className="subtitle is-6">{id.toUpperCase()}</p>
          </div>
        </div>

        <div className="content">
          <div className="stock-data">
            <div className="pricing">
              <span className="stock-title tag">Einkauf:</span>
              <span>{spent.toLocaleString()}€</span>
            </div>
            <div className="pricing">
              <span className="stock-title tag">Aktuell:</span>
              <span>
                {formatToCurrency(
                  spent +
                    spent * (calculatePercentage(value, purchaseValue) / 100)
                )}
              </span>
            </div>
          </div>
          <div className="performance">
            <span
              className={classNames({
                "is-success": value > purchaseValue,
                "is-danger": purchaseValue > value,
              })}
            >
              {formatToCurrency(
                spent * (calculatePercentage(value, purchaseValue) / 100)
              )}{" "}
              <div className="font-small">
                ({calculatePercentage(value, purchaseValue).toLocaleString()}%)
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
