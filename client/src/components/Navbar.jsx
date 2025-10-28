import {
  Briefcase,
  ChevronDown,
  LoaderCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false); // ✅ new state
  const profileMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const loginDropdownRef = useRef(null); // ✅ new ref
  const { isLogin, userData, userDataLoading, setIsLogin } =
    useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { name: "Home", path: "/" },
    { name: "All Jobs", path: "/all-jobs/all" },
    { name: "About", path: "/about" },
    { name: "Terms", path: "/terms" },
  ];

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleProfileMenu = () => setIsProfileMenuOpen((prev) => !prev);
  const toggleLoginDropdown = () =>
    setIsLoginDropdownOpen((prev) => !prev); // ✅

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('[aria-label="Toggle menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }

      if (
        loginDropdownRef.current &&
        !loginDropdownRef.current.contains(event.target)
      ) {
        setIsLoginDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    toast.success("Logout successfully");
    navigate("/candidate-login");
    setIsLogin(false);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileMenuOpen(false);
    setIsLoginDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                className="w-[120px]"
                src="https://i.postimg.cc/85dCjtcn/logo.png"
                alt="ChakriLagbe Logo"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-4">
              {menu.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-green-600 bg-green-50"
                          : "text-gray-600 hover:text-green-500 hover:bg-green-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Buttons */}
            {userDataLoading ? (
              <LoaderCircle className="animate-spin text-gray-600 hidden lg:block" />
            ) : isLogin ? (
              <div
                className="hidden lg:flex items-center gap-4 relative"
                ref={profileMenuRef}
              >
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center gap-2 focus:outline-none"
                  aria-expanded={isProfileMenuOpen}
                >
                  <span className="text-sm font-medium text-gray-700">
                    Hi, {userData?.name || "User"}
                  </span>
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src={userData?.image || assets.avatarPlaceholder}
                    alt="User profile"
                    onError={(e) => {
                      e.currentTarget.src = assets.avatarPlaceholder;
                    }}
                  />
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isProfileMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 top-12 mt-2 w-56 origin-top-right rounded-md border border-gray-200 bg-white z-50 overflow-hidden">
                    <div>
                      <Link
                        to="/applications"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 gap-2"
                      >
                        <Briefcase size={16} />
                        Applied Jobs
                      </Link>

                      <button
                        className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 gap-2"
                        onClick={handleLogout}
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // ✅ Dropdown Login Button (new)
              <div className="hidden lg:block relative" ref={loginDropdownRef}>
                <button
                  onClick={toggleLoginDropdown}
                  className="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Login <ChevronDown size={14} />
                </button>

                {isLoginDropdownOpen && (
                  <div className="absolute right-0 top-10 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <Link
                      to="/candidate-login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Candidate Login
                    </Link>
                    <Link
                      to="/recruiter-login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Recruiter Login
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MAIN CONTENT (for spacing below sticky navbar) ================= */}
      <main className="pt-20">
        {/* Other content goes here */}
      </main>
    </>
  );
};

export default Navbar;
