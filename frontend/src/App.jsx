import { useState } from "react";
import DatasetGenerator from "./components/DatasetGenerator";
import KMeansControls from "./components/KMeansControls";
import ScatterPlot from "./components/ScatterPlot";

export default function App() {
  const [dataset, setDataset] = useState([]);
  const [centroids, setCentroids] = useState([]);

  const handleGenerateDataset = (points) => {
    setDataset(points);
    setCentroids([]);
  };

  return (
    <main>
      <h1>K-Means Visualizer</h1>

      <DatasetGenerator onGenerate={handleGenerateDataset} />
      <KMeansControls points={dataset} onCluster={setCentroids} />
      <ScatterPlot points={dataset} centroids={centroids} />
    </main>
  );
}
