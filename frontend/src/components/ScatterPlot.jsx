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
    return (
      <section className="card plot-card">
        <p className="empty-state">
          No dataset generated yet. Start by generating random points.
        </p>
      </section>
    );
  }

  const getPointColor = (index) => {
    const clusterIndex = assignments[index];

    if (clusterIndex === undefined) {
      return "#64748b";
    }

    return CLUSTER_COLORS[clusterIndex % CLUSTER_COLORS.length];
  };

  return (
    <section className="card plot-card">
      <svg className="scatter-plot" viewBox="0 0 100 100">
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
            stroke="#0f172a"
            strokeWidth="0.7"
          />
        ))}
      </svg>
    </section>
  );
}