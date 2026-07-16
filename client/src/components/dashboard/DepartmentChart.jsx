import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "IT", value: 40 },
  { name: "HR", value: 15 },
  { name: "Sales", value: 25 },
  { name: "Finance", value: 20 },
];

const COLORS = [
  "#2563EB",
  "#22C55E",
  "#F97316",
  "#8B5CF6",
];

function DepartmentChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 h-[360px]">

      <h2 className="text-xl font-bold mb-5">
        Department Distribution
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>

          <Pie
            data={data}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default DepartmentChart;