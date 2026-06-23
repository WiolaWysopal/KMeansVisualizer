import { useState } from "react";
import api from "../services/api";

export default function KMeansControls({ points, onCluster }) {
  const [k, setK] = useState(3);
  const [error, setError] = useState("");

  const handleRunKMeans = async () => {
    try {
      setError("");

      const response = await api.post("/kmeans/steps", {
        points: points.map((point) => [point.x, point.y]),
        k,
        max_iterations: 10,
      });

      onCluster({
        finalCentroids: response.data.final_centroids,
        iterations: response.data.iterations,
        k,
      });
    } catch {
      setError("Failed to run K-Means.");
    }
  };

  return (
    <section className="card">
      <h2>K-Means Clustering</h2>
      <p>Select the number of clusters and run the algorithm.</p>

      <div className="form-group">
        <label htmlFor="clusters">Number of clusters</label>
        <input
          id="clusters"
          type="number"
          min="1"
          max="10"
          value={k}
          onChange={(event) => setK(Number(event.target.value))}
        />
      </div>

      <button onClick={handleRunKMeans} disabled={!points.length}>
        Run K-Means
      </button>

      {error && <p className="error-message">{error}</p>}
    </section>
  );
}