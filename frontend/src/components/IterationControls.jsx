import { useEffect, useState } from "react";

export default function IterationControls({
  currentIterationIndex,
  totalIterations,
  onPrevious,
  onNext,
  onReset,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const isFirstIteration = currentIterationIndex === 0;
  const isLastIteration = currentIterationIndex === totalIterations - 1;

  useEffect(() => {
    if (!isPlaying || totalIterations === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      if (currentIterationIndex >= totalIterations - 1) {
        setIsPlaying(false);
        return;
      }

      onNext();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentIterationIndex, isPlaying, onNext, totalIterations]);

  if (totalIterations === 0) {
    return null;
  }

  const handlePlayPause = () => {
    if (isLastIteration) {
      onReset();
    }

    setIsPlaying((currentValue) => !currentValue);
  };

  return (
    <section className="card">
      <h2>Iteration Controls</h2>

      <p>
        Iteration {currentIterationIndex + 1} of {totalIterations}
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${((currentIterationIndex + 1) / totalIterations) * 100}%`,
          }}
        />
      </div>

      <div className="button-row">
        <button
          className="secondary-button"
          onClick={onPrevious}
          disabled={isFirstIteration}
        >
          Previous
        </button>

        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          className="secondary-button"
          onClick={onNext}
          disabled={isLastIteration}
        >
          Next
        </button>

        <button className="secondary-button" onClick={onReset}>
          Reset
        </button>
      </div>
    </section>
  );
}
