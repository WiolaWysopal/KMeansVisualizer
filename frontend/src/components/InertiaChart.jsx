import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function InertiaChart({ iterations = [] }) {
  if (!iterations.length) {
    return null;
  }

  const chartData = iterations.map((iteration) => ({
    iteration: iteration.iteration,
    inertia: Number(iteration.inertia.toFixed(2)),
  }));

  return (
    <section className="card inertia-chart-card">
      <h2>Inertia Trend</h2>
      <p>Lower inertia means points are closer to their assigned centroids.</p>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="iteration" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="inertia"
              stroke="#7c3aed"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}