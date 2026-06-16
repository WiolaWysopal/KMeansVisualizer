export default function ScatterPlot({ points, centroids = [] }) {
  if (!points.length) {
    return <p>No dataset generated yet.</p>;
  }

  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 100 100"
      style={{ border: "1px solid #ccc", background: "#fafafa" }}
    >
      {points.map((point, index) => (
        <circle
          key={`point-${index}`}
          cx={point.x}
          cy={100 - point.y}
          r="1.5"
          fill="steelblue"
        />
      ))}

      {centroids.map(([x, y], index) => (
        <circle
          key={`centroid-${index}`}
          cx={x}
          cy={100 - y}
          r="3"
          fill="crimson"
          stroke="white"
          strokeWidth="0.7"
        />
      ))}
    </svg>
  );
}
