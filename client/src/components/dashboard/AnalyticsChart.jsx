import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", employees: 35 },
  { month: "Feb", employees: 45 },
  { month: "Mar", employees: 52 },
  { month: "Apr", employees: 60 },
  { month: "May", employees: 74 },
  { month: "Jun", employees: 86 },
];

function AnalyticsChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-[360px]">

      <h2 className="text-xl font-bold mb-5">
        Employee Growth
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="employees"
            stroke="#2563EB"
            fill="#93C5FD"
          />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}

export default AnalyticsChart;