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

      onCluster(response.data.final_centroids);
    } catch {
      setError("Failed to run K-Means.");
    }
  };

  return (
    <section>
      <h2>K-Means Clustering</h2>

      <label htmlFor="clusters">Number of clusters:</label>
      <input
        id="clusters"
        type="number"
        min="1"
        max="10"
        value={k}
        onChange={(event) => setK(Number(event.target.value))}
      />

      <button onClick={handleRunKMeans} disabled={!points.length}>
        Run K-Means
      </button>

      {error && <p>{error}</p>}
    </section>
  );
}
