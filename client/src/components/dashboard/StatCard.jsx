import React from "react";

function StatCard({
  title,
  value,
  icon,
  color = "bg-blue-500",
  change,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-slate-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2 text-slate-800">
            {value}
          </h2>

          <p className="text-green-600 text-sm mt-3">
            {change}
          </p>
        </div>

        <div
          className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white text-3xl`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;