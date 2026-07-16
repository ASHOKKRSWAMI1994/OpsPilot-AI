import MainLayout from "../../layouts/MainLayout";
import StatCard from "../../components/dashboard/StatCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import DepartmentChart from "../../components/dashboard/DepartmentChart";

import { FaUsers, FaTasks, FaChartBar, FaRobot } from "react-icons/fa";

function Dashboard() {
  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome Back, Ashok 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Here's what's happening in your organization today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Employees"
          value="128"
          icon={<FaUsers />}
          color="bg-blue-600"
          change="+12 this month"
        />

        <StatCard
          title="Active Tasks"
          value="58"
          icon={<FaTasks />}
          color="bg-green-600"
          change="+8 today"
        />

        <StatCard
          title="Reports"
          value="17"
          icon={<FaChartBar />}
          color="bg-orange-500"
          change="2 pending"
        />

        <StatCard
          title="AI Score"
          value="94%"
          icon={<FaRobot />}
          color="bg-purple-600"
          change="Excellent"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
        <div className="xl:col-span-2">
          <AnalyticsChart />
        </div>

        <DepartmentChart />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
