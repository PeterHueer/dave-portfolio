import classNames from "classnames";
import Hero from "../UI/Hero";
import profil from "../assets/dave.png";
import CountUp from "react-countup";
import {useEffect, useState} from "react";
import tarmac from "../assets/tarmac.png"
// Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
const dollarEyes = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path
      d="M160 0C177.7 0 192 14.33 192 32V67.68C193.6 67.89 195.1 68.12 196.7 68.35C207.3 69.93 238.9 75.02 251.9 78.31C268.1 82.65 279.4 100.1 275 117.2C270.7 134.3 253.3 144.7 236.1 140.4C226.8 137.1 198.5 133.3 187.3 131.7C155.2 126.9 127.7 129.3 108.8 136.5C90.52 143.5 82.93 153.4 80.92 164.5C78.98 175.2 80.45 181.3 82.21 185.1C84.1 189.1 87.79 193.6 95.14 198.5C111.4 209.2 136.2 216.4 168.4 225.1L171.2 225.9C199.6 233.6 234.4 243.1 260.2 260.2C274.3 269.6 287.6 282.3 295.8 299.9C304.1 317.7 305.9 337.7 302.1 358.1C295.1 397 268.1 422.4 236.4 435.6C222.8 441.2 207.8 444.8 192 446.6V480C192 497.7 177.7 512 160 512C142.3 512 128 497.7 128 480V445.1C127.6 445.1 127.1 444.1 126.7 444.9L126.5 444.9C102.2 441.1 62.07 430.6 35 418.6C18.85 411.4 11.58 392.5 18.76 376.3C25.94 360.2 44.85 352.9 60.1 360.1C81.9 369.4 116.3 378.5 136.2 381.6C168.2 386.4 194.5 383.6 212.3 376.4C229.2 369.5 236.9 359.5 239.1 347.5C241 336.8 239.6 330.7 237.8 326.9C235.9 322.9 232.2 318.4 224.9 313.5C208.6 302.8 183.8 295.6 151.6 286.9L148.8 286.1C120.4 278.4 85.58 268.9 59.76 251.8C45.65 242.4 32.43 229.7 24.22 212.1C15.89 194.3 14.08 174.3 17.95 153C25.03 114.1 53.05 89.29 85.96 76.73C98.98 71.76 113.1 68.49 128 66.73V32C128 14.33 142.3 0 160 0V0z"/>
  </svg>
);

export default function Summary(props: {
  totalStock: number;
}) {
  const [total, setTotal] = useState(0);
  const {totalStock} = props;
  const invested = 30000;

  const formatToCurrency = (value: number) => {
    return Math.round(value * 100) / 100;
  };

  useEffect(() => {
    if (totalStock) {
      setTotal(totalStock);
    }
  }, [totalStock])

  return (
    <Hero title="Aktueller Gesamtwert">
      <div className="card">
        <img
          src={profil}
          alt="Placeholder image"
          className="mobile-image"
        />
        <div className="card-content overflow-hidden">
          <div className="media is-flexwrap">
            <div className="media-left only-desktop">
              <figure className="image is-128x128">
                <img
                  src={profil}
                  alt="Placeholder image"
                />
                <div className="dollar-eye-wrapper">
                  <div className="eye">{dollarEyes}</div>
                  <div className="eye">{dollarEyes}</div>
                </div>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-2">Dave</p>
              <p className="subtitle is-6 mb-0">Youtuber, Investor und <a href="https://tarmac.clothing/"
                                                                          className="tarmac">Gründer von <img
                alt="tarmac logo" src={tarmac}/></a></p>
              <div className="mt-2"></div>
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
                <div className="font-very-small">
                  Summe Investment: 30.000€
              </div>
                <CountUp
                  start={0}
                  end={formatToCurrency(total)}
                  duration={0.8}
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
                  <CountUp
                    duration={0.8}
                    end={((invested + total) * 100) / invested - 100}
                    decimal=","
                    decimals={2}
                    suffix=" % Gewinn"
                  />
                  )
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
}
