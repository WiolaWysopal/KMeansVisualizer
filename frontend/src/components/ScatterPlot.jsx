const CLUSTER_COLORS = [
  "#2563eb",
  "#16a34a",
  "#f97316",
  "#9333ea",
  "#0891b2",
  "#ca8a04",
  "#dc2626",
  "#4f46e5",
  "#0f766e",
  "#be123c",
];

export default function ScatterPlot({
  points,
  centroids = [],
  assignments = [],
}) {
  if (!points.length) {
    return <p>No dataset generated yet.</p>;
  }

  const getPointColor = (index) => {
    const clusterIndex = assignments[index];

    if (clusterIndex === undefined) {
      return "steelblue";
    }

    return CLUSTER_COLORS[clusterIndex % CLUSTER_COLORS.length];
  };

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
          fill={getPointColor(index)}
        />
      ))}

      {centroids.map(([x, y], index) => (
        <circle
          key={`centroid-${index}`}
          cx={x}
          cy={100 - y}
          r="3"
          fill={CLUSTER_COLORS[index % CLUSTER_COLORS.length]}
          stroke="black"
          strokeWidth="0.7"
        />
      ))}
    </svg>
  );
}