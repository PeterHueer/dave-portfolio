import parqet from "../assets/parqet.png";

export default function WaterMark() {
  return (
    <div className="watermark">
      <a target="_blank" href="https://www.parqet.com">
        <img className="round-left-bottom" src={parqet} />
      </a>
    </div>
  );
}
