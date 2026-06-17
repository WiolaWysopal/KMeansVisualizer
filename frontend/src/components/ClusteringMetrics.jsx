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
    <section>
      <h2>Clustering Metrics</h2>

      <p>Dataset size: {datasetSize} points</p>
      <p>Clusters: {clusteringResult.k}</p>
      <p>Total iterations: {iterations.length}</p>
      <p>
        Current inertia:{" "}
        {currentIteration ? currentIteration.inertia.toFixed(2) : "N/A"}
      </p>
      <p>
        Final inertia:{" "}
        {finalIteration ? finalIteration.inertia.toFixed(2) : "N/A"}
      </p>
    </section>
  );
}