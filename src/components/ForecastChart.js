import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  {
    year: "2026",
    score: 56
  },
  {
    year: "2027",
    score: 52
  },
  {
    year: "2028",
    score: 47
  },
  {
    year: "2029",
    score: 39
  }
];

function ForecastChart() {

  return (

    <div className="section">

      <h2>
        Biodiversity Forecast
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#4ade80"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default ForecastChart;