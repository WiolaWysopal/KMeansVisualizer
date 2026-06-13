export default function ScatterPlot({ points }) {
  if (!points.length) {
    return <p>No dataset generated yet.</p>;
  }

  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 100 100"
      style={{ border: '1px solid #ccc', background: '#fafafa' }}
    >
      {points.map((point) => (
        <circle
          key={point.id}
          cx={point.x}
          cy={100 - point.y}
          r="1.5"
          fill="steelblue"
        />
      ))}
    </svg>
  );
}