import { useEffect, useState } from "react";

export default function IterationControls({
  currentIterationIndex,
  totalIterations,
  onPrevious,
  onNext,
  onReset,
  onSelectIteration,
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
    <section>
      <h2>Iteration Controls</h2>

      <p>
        Iteration: {currentIterationIndex + 1} / {totalIterations}
      </p>

      <input
        type="range"
        min="0"
        max={totalIterations - 1}
        value={currentIterationIndex}
        onChange={(event) => onSelectIteration(Number(event.target.value))}
      />

      <div>
        <button onClick={onPrevious} disabled={isFirstIteration}>
          Previous
        </button>

        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button onClick={onNext} disabled={isLastIteration}>
          Next
        </button>

        <button onClick={onReset}>Reset</button>
      </div>
    </section>
  );
}