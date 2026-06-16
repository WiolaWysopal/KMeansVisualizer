import { useState } from "react";
import ClusteringMetrics from "./components/ClusteringMetrics";
import DatasetGenerator from "./components/DatasetGenerator";
import KMeansControls from "./components/KMeansControls";
import ScatterPlot from "./components/ScatterPlot";

export default function App() {
  const [dataset, setDataset] = useState([]);
  const [clusteringResult, setClusteringResult] = useState(null);

  const handleGenerateDataset = (points) => {
    setDataset(points);
    setClusteringResult(null);
  };

  const centroids = clusteringResult?.finalCentroids ?? [];

  return (
    <main>
      <h1>K-Means Visualizer</h1>

      <DatasetGenerator onGenerate={handleGenerateDataset} />
      <KMeansControls points={dataset} onCluster={setClusteringResult} />
      <ScatterPlot points={dataset} centroids={centroids} />
      <ClusteringMetrics
        datasetSize={dataset.length}
        clusteringResult={clusteringResult}
      />
    </main>
  );
}
