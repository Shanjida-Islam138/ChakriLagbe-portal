import axios from "axios";
import { Lock, Mail, Upload, UserRound, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Added useNavigate
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const RecruiterSignup = () => {
  const [companyLogo, setCompanyLogo] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { backendUrl, setCompanyData, setCompanyToken } =
    useContext(AppContext);
  const navigate = useNavigate();

  const recruiterSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("image", companyLogo);

      const { data } = await axios.post(
        `${backendUrl}/company/register-company`,
        formData
      );

      if (data.success) {
        setCompanyToken(data.token);
        setCompanyData(data.companyData);
        localStorage.setItem("companyToken", data.token);
        toast.success(data.message);
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }

      console.log("Signup successful:", data);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };
return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center mt-20">
          <div className="w-full max-w-md border border-green-400 rounded-lg p-6 bg-white shadow">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold text-green-700 mb-1.5">
                Recruiter Sign Up
              </h1>
              <p className="text-sm text-gray-600">
                Welcome! Please create an account to continue
              </p>
            </div>

            <form className="space-y-4" onSubmit={recruiterSignup}>
              {/* Logo Upload */}
              <div className="flex flex-col items-center mb-4">
                <label className="relative cursor-pointer flex items-center justify-between flex-col">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-dashed border-green-400 hover:border-green-600 transition-colors">
                    {companyLogo ? (
                      <img
                        src={URL.createObjectURL(companyLogo)}
                        alt="Company logo preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Upload className="h-5 w-5 text-green-400" />
                    )}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => setCompanyLogo(e.target.files[0])}
                      required
                    />
                  </div>
                  <span className="block text-xs mt-2 text-green-600">
                    {companyLogo ? "Change logo" : "Upload company logo"}
                  </span>
                </label>
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                <div className="border border-green-400 rounded flex items-center p-2.5">
                  <UserRound className="h-5 w-5 text-green-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full outline-none text-sm bg-transparent placeholder-green-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="border border-green-400 rounded flex items-center p-2.5">
                  <Mail className="h-5 w-5 text-green-500 mr-2" />
                  <input
                    type="email"
                    placeholder="Email id"
                    className="w-full outline-none text-sm bg-transparent placeholder-green-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="border border-green-400 rounded flex items-center p-2.5">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <input
                    type="password"
                    placeholder="Create password"
                    className="w-full outline-none text-sm bg-transparent placeholder-green-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Terms */}
              <label
                htmlFor="terms-checkbox"
                className="text-sm text-gray-600 flex items-center gap-2 cursor-pointer"
              >
                <input
                  id="terms-checkbox"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 rounded border-gray-300"
                  required
                />
                I agree to the{" "}
                <Link to="/terms" className="text-green-600 hover:underline">
                  Terms and Conditions
                </Link>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition flex justify-center items-center cursor-pointer ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {loading ? (
                  <LoaderCircle className="animate-spin h-5 w-5" />
                ) : (
                  "Create Account"
                )}
              </button>

              <div className="text-center text-sm text-gray-600 pt-2">
                Already have an account?{" "}
                <Link
                  to="/recruiter-login"
                  className="text-green-600 hover:text-green-800 font-medium hover:underline"
                >
                  Log In
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

export default RecruiterSignup;
