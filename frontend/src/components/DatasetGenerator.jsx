import { useState } from 'react';
import { generateDataset } from '../utils/generateDataset';

export default function DatasetGenerator({ onGenerate }) {
  const [pointCount, setPointCount] = useState(50);

  const handleGenerate = () => {
    const dataset = generateDataset(pointCount);
    onGenerate(dataset);
  };

  return (
    <section>
      <h2>Dataset Generator</h2>

      <label htmlFor="pointCount">Number of points:</label>
      <input
        id="pointCount"
        type="number"
        min="5"
        max="300"
        value={pointCount}
        onChange={(event) => setPointCount(Number(event.target.value))}
      />

      <button onClick={handleGenerate}>Generate Dataset</button>
    </section>
  );
}