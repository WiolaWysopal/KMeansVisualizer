import { useState } from "react";
import "./App.css";
import ClusteringMetrics from "./components/ClusteringMetrics";
import DatasetGenerator from "./components/DatasetGenerator";
import IterationControls from "./components/IterationControls";
import KMeansControls from "./components/KMeansControls";
import ScatterPlot from "./components/ScatterPlot";
import InertiaChart from "./components/InertiaChart";

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
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">ML Algorithm Visualizer</p>
        <h1>K-Means Visualizer</h1>
        <p className="subtitle">
          Generate a 2D dataset, run K-Means clustering, and explore each
          iteration step by step.
        </p>
      </header>

      <section className="dashboard">
        <div className="sidebar">
          <DatasetGenerator onGenerate={handleGenerateDataset} />
          <KMeansControls points={dataset} onCluster={handleCluster} />
          <ClusteringMetrics
            datasetSize={dataset.length}
            clusteringResult={clusteringResult}
            currentIteration={currentIteration}
          />
        </div>

        <div className="visualization-panel">
          <ScatterPlot
            points={dataset}
            centroids={currentCentroids}
            assignments={currentIteration?.assignments ?? []}
          />

          <IterationControls
            currentIterationIndex={currentIterationIndex}
            totalIterations={iterations.length}
            onPrevious={handlePreviousIteration}
            onNext={handleNextIteration}
            onReset={handleResetIteration}
          />

          <InertiaChart iterations={iterations} />
        </div>
      </section>
    </main>
  );
}