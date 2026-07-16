import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-8">

          {children}

        </main>

      </div>

    </div>
  );
}

export default MainLayout;