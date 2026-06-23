export default function ClusteringMetrics({
  datasetSize,
  clusteringResult,
  currentIteration,
}) {
  if (!clusteringResult) {
    return null;
  }

  const iterations = clusteringResult.iterations ?? [];
  const finalIteration = iterations[iterations.length - 1];

  return (
    <section className="card">
      <h2>Clustering Metrics</h2>

      <div className="metrics-grid">
        <div className="metric">
          <span>Dataset size</span>
          <span>{datasetSize} points</span>
        </div>

        <div className="metric">
          <span>Clusters</span>
          <span>{clusteringResult.k}</span>
        </div>

        <div className="metric">
          <span>Total iterations</span>
          <span>{iterations.length}</span>
        </div>

        <div className="metric">
          <span>Current inertia</span>
          <span>
            {currentIteration ? currentIteration.inertia.toFixed(2) : "N/A"}
          </span>
        </div>

        <div className="metric">
          <span>Final inertia</span>
          <span>{finalIteration ? finalIteration.inertia.toFixed(2) : "N/A"}</span>
        </div>
      </div>
    </section>
  );
}