import classNames from "classnames";
import Hero from "../UI/Hero";
import profil from "../assets/profil.jpg";
import { useEffect } from "react";
import CountUp from "react-countup";

export default function Summary(props: { total: number }) {
  const { total } = props;
  const invested = 40000;

  const formatToCurrency = (value: number) => {
    return Math.round(value * 100) / 100;
  };

  return (
    <Hero title="Aktueller Gesamtwert">
      <div className="card">
        <div className="card-image">
          <figure className="chart"></figure>
        </div>
        <div className="card-content">
          <div className="media is-flexwrap">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src={profil}
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Dave</p>
              <p className="subtitle is-6 mb-0">Youtuber und Investor</p>
              <a
                href="https://www.youtube.com/watch?v=7NTVLxEX_fQ"
                target="_blank"
              >
                <i>
                  Hier zum <b>Youtube</b> Video von Dave
                </i>
              </a>
            </div>
            <div className="performance big">
              <span
                className={classNames({
                  "is-success": invested + total > invested,
                  "is-danger": invested > invested + total,
                })}
              >
                <CountUp
                  start={40000}
                  end={formatToCurrency(invested + total)}
                  duration={1}                
                  decimal=","
                  decimals={2}
                  separator="."
                  suffix=" €"
                  useEasing
                  easingFn={(t: number, b: number, c: number, d: number) =>
                    c * Math.sqrt(1 - (t = t / d - 1) * t) + b
                  }
                ></CountUp>
                <div className="font-small">
                  (
                  {(
                    ((invested + total) * 100) / invested -
                    100
                  ).toLocaleString()}
                  %)
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
}
