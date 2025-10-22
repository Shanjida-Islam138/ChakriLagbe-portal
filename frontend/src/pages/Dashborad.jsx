import { useContext, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { LoaderCircle, LogOut, ChevronDown, Menu, X } from "lucide-react";
import toast from "react-hot-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { companyData, companyLoading } = useContext(AppContext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarRef = useRef(null);

  const sidebarLinks = [
    {
      id: "manage-jobs",
      name: "Manage Jobs",
      path: "/dashboard/manage-jobs",
      icon: assets.home_icon,
    },
    {
      id: "add-job",
      name: "Add Job",
      path: "/dashboard/add-job",
      icon: assets.add_icon,
    },
    {
      id: "view-applications",
      name: "View Applications",
      path: "/dashboard/view-applications",
      icon: assets.person_tick_icon,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("companyToken");
    toast.success("Logout successfully");
    navigate("/recruiter-login");
  };

  useEffect(() => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/"
    ) {
      document.title = "Chakri Lagbe | Dashboard";
      navigate("/dashboard/manage-jobs");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-green-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center">
              <img
                className="w-[120px]"
                src={assets.logo}
                alt="ChakriLagbe Logo"
              />
            </Link>

            {/* Desktop Menu */}
            {companyLoading ? (
              <LoaderCircle className="animate-spin text-green-600 fill-current hidden lg:block" />
            ) : companyData ? (
              <div className="hidden lg:flex items-center gap-4 relative">
                <button
                  className="flex items-center gap-2 focus:outline-none"
                  aria-expanded="false"
                >
                  <span className="text-sm font-medium text-green-700">
                    Hi, {companyData?.name}
                  </span>
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src={companyData?.image}
                    alt="Company profile"
                  />
                  <ChevronDown size={16} />
                </button>
                <button
                  className="w-[30px] h-[30px] flex items-center justify-center rounded bg-green-50 border border-green-200 hover:bg-green-100 transition-colors cursor-pointer"
                  onClick={handleLogout}
                  aria-label="Logout"
                >
                  <LogOut size={18} className="text-green-700" />
                </button>
              </div>
            ) : null}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-md text-green-700 hover:bg-green-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= SIDEBAR + MAIN ================= */}
      <div className="flex flex-1 pt-16 w-full">
        {/* Sidebar */}
        <aside
          ref={sidebarRef}
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block md:w-64 w-16 border-r border-green-200 bg-white flex flex-col shrink-0 pt-4`}
        >
          <nav className="rounded-l-2xl">
            {sidebarLinks.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                className={({ isActive }) =>
                  `flex items-center py-3 px-4 gap-3 transition-colors rounded-l-md ${
                    isActive
                      ? "border-r-4 md:border-r-[6px] bg-green-50 border-green-500 text-green-600 font-medium"
                      : "text-green-600 hover:bg-green-100"
                  }`
                }
                end={item.path === "/dashboard/manage-jobs"}
              >
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-5 h-5"
                />
                <span className="md:block hidden">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
