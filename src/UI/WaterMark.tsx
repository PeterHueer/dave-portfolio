import parqet from "../assets/parqet.png";

export default function WaterMark() {
  return (
    <div className="watermark">
      <a target="_blank" href="https://app.parqet.com/p/63372c07a95d112cb413d2c7">
        <img className="round-left-bottom" src={parqet} />
      </a>
    </div>
  );
}
