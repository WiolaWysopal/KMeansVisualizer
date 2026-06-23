import { useState } from "react";
import api from "../services/api";

export default function DatasetGenerator({ onGenerate }) {
  const [pointCount, setPointCount] = useState(50);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await api.post("/datasets/generate", {
        points: pointCount,
      });

      const formattedPoints = response.data.points.map(([x, y]) => ({
        x,
        y,
      }));

      onGenerate(formattedPoints);
    } catch {
      setError("Failed to generate dataset.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="card">
      <h2>Dataset Generator</h2>
      <p>Generate random 2D points for clustering.</p>

      <div className="form-group">
        <label htmlFor="pointCount">Number of points</label>
        <input
          id="pointCount"
          type="number"
          min="5"
          max="300"
          value={pointCount}
          onChange={(event) => setPointCount(Number(event.target.value))}
        />
      </div>

      <button onClick={handleGenerate} disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate Dataset"}
      </button>

      {error && <p className="error-message">{error}</p>}
    </section>
  );
}
