import { useState } from 'react';
import DatasetGenerator from './components/DatasetGenerator';
import ScatterPlot from './components/ScatterPlot';

export default function App() {
  const [dataset, setDataset] = useState([]);

  return (
    <main>
      <h1>K-Means Visualizer</h1>

      <DatasetGenerator onGenerate={setDataset} />
      <ScatterPlot points={dataset} />
    </main>
  );
}