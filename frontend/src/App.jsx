import { useState } from "react";
import ClusteringMetrics from "./components/ClusteringMetrics";
import DatasetGenerator from "./components/DatasetGenerator";
import IterationControls from "./components/IterationControls";
import KMeansControls from "./components/KMeansControls";
import ScatterPlot from "./components/ScatterPlot";

export default function App() {
  const [dataset, setDataset] = useState([]);
  const [clusteringResult, setClusteringResult] = useState(null);
  const [currentIterationIndex, setCurrentIterationIndex] = useState(0);

  const iterations = clusteringResult?.iterations ?? [];
  const currentIteration = iterations[currentIterationIndex];
  const currentCentroids =
    currentIteration?.centroids ?? clusteringResult?.finalCentroids ?? [];

  const handleGenerateDataset = (points) => {
    setDataset(points);
    setClusteringResult(null);
    setCurrentIterationIndex(0);
  };

  const handleCluster = (result) => {
    setClusteringResult(result);
    setCurrentIterationIndex(0);
  };

  const handlePreviousIteration = () => {
    setCurrentIterationIndex((currentIndex) => Math.max(currentIndex - 1, 0));
  };

  const handleNextIteration = () => {
    setCurrentIterationIndex((currentIndex) =>
      Math.min(currentIndex + 1, iterations.length - 1),
    );
  };

  const handleResetIteration = () => {
    setCurrentIterationIndex(0);
  };

  return (
    <main>
      <h1>K-Means Visualizer</h1>

      <DatasetGenerator onGenerate={handleGenerateDataset} />
      <KMeansControls points={dataset} onCluster={handleCluster} />

      <ScatterPlot points={dataset} centroids={currentCentroids} />

      <IterationControls
        currentIterationIndex={currentIterationIndex}
        totalIterations={iterations.length}
        onPrevious={handlePreviousIteration}
        onNext={handleNextIteration}
        onReset={handleResetIteration}
        onSelectIteration={setCurrentIterationIndex}
      />

      <ClusteringMetrics
        datasetSize={dataset.length}
        clusteringResult={clusteringResult}
        currentIteration={currentIteration}
      />
    </main>
  );
}