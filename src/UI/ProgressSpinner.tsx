export default function ProgressSpinner(props: {height?: number}) {
  return (
    <div className="progress-wrapper" style={{height: props.height}}>
      <progress className="progress is-large is-info" max="100"></progress>
    </div>
  );
}
