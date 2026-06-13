export function generateDataset(pointCount = 50) {
  return Array.from({ length: pointCount }, (_, index) => ({
    id: index + 1,
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
  }));
}