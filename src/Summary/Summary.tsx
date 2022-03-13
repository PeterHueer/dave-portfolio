import classNames from "classnames";
import Hero from "../UI/Hero";
import profil from '../assets/profil.jpg';

export default function Summary(props: { total: number }) {
  const { total } = props;
  const invested = 40000;

  const formatToCurrency = (value: number) => {
    return `${(Math.round(value * 100) / 100).toLocaleString()} €`;
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
                <img src={profil} alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Dave</p>
              <p className="subtitle is-6">Youtuber und Investor</p>
            </div>
            <div className="performance big">
              <span
                className={classNames({
                  "is-success": invested + total > invested,
                  "is-danger": invested > invested + total,
                })}
              >
                {formatToCurrency(invested + total)}
                <div className="font-small">
                  ({(((invested + total) * 100) / invested - 100).toLocaleString()}%)
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
}
