import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

function RiskDistributionChart({ data = [] }) {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
      >
        {data.map((entry, index) => (
          <Cell
            key={index}
            fill={
              entry.name === "High Risk"
                ? "red"
                : entry.name === "Medium Risk"
                ? "orange"
                : "green"
            }
          />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
}

export default RiskDistributionChart;