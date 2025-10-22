import { Lock, Mail, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import axios from "axios";

const RecruiterLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { backendUrl, setCompanyData, setCompanyToken } =
    useContext(AppContext);
  const navigate = useNavigate(); // ✅ Added useNavigate

  const recruiterLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Fixed loading state

    try {
      const { data } = await axios.post(`${backendUrl}/company/login-company`, {
        email,
        password,
      });

      if (data.success) {
        setCompanyToken(data.token);
        setCompanyData(data.companyData);
        localStorage.setItem("companyToken", data.token);
        toast.success(data.message);
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <main className="flex-grow flex items-center justify-center mt-20">
          <div className="w-full max-w-md border border-green-400 rounded-lg p-6 bg-white">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold text-green-700 mb-1">
                Recruiter Login
              </h1>
              <p className="text-sm text-gray-600">
                Welcome back! Please login to continue
              </p>
            </div>

            <form className="space-y-4" onSubmit={recruiterLogin}>
              <div className="border border-green-400 rounded flex items-center p-2.5 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <input
                  type="email"
                  placeholder="Email id"
                  className="w-full outline-none text-sm placeholder-green-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="border border-green-400 rounded flex items-center p-2.5 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent">
                <Lock className="h-5 w-5 text-green-500 mr-2" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none text-sm placeholder-green-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                    required
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition flex justify-center items-center ${
                  loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                }`}
              >
                {loading ? (
                  <LoaderCircle className="animate-spin h-5 w-5" />
                ) : (
                  "Login"
                )}
              </button>

              <div className="text-center text-sm text-gray-600 mt-2">
                Don't have an account?{" "}
                <Link
                  to="/recruiter-signup"
                  className="text-green-600 hover:text-green-800 font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RecruiterLogin;
