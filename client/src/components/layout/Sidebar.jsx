import {
  FaHome,
  FaUsers,
  FaTasks,
  FaChartBar,
  FaCog,
  FaUserCircle,
  FaRobot,
} from "react-icons/fa";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="w-80 min-h-screen bg-[#0F172A] flex flex-col justify-between">

      {/* Logo */}

      <div>

        <div className="p-6 border-b border-slate-800">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">

              🤖

            </div>

            <div>

              <h1 className="text-white text-2xl font-bold">

                OpsPilot AI

              </h1>

              <p className="text-slate-400 text-sm">

                Enterprise Workforce

              </p>

            </div>

          </div>

        </div>

        {/* Menu */}

        <div className="p-4 space-y-2">

          <SidebarItem
            icon={<FaHome />}
            title="Dashboard"
            path="/dashboard"
          />

          <SidebarItem
            icon={<FaUsers />}
            title="Employees"
            path="/employees"
          />

          <SidebarItem
            icon={<FaTasks />}
            title="Tasks"
            path="/tasks"
          />

          <SidebarItem
            icon={<FaChartBar />}
            title="Reports"
            path="/reports"
          />

          <SidebarItem
            icon={<FaRobot />}
            title="AI Insights"
            path="/ai-insights"
          />

          <SidebarItem
            icon={<FaCog />}
            title="Settings"
            path="/settings"
          />

          <SidebarItem
            icon={<FaUserCircle />}
            title="Profile"
            path="/profile"
          />

        </div>

      </div>

      {/* Profile */}

      <div className="border-t border-slate-800 p-5">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">

            AS

          </div>

          <div>

            <h3 className="text-white font-semibold">

              Ashok Kr Swami

            </h3>

            <p className="text-slate-400 text-sm">

              Administrator

            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;