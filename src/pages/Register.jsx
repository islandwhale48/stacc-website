// pages/RegisterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

const validatePassword = (password) => {
  const minLength = /.{8,}/;
  const upper = /[A-Z]/;
  const lower = /[a-z]/;
  const digit = /\d/;  // FIXED
  const special = /[!@#$%^&*(),.?":{}|<>]/;
  return (
    minLength.test(password) &&
    upper.test(password) &&
    lower.test(password) &&
    digit.test(password) &&
    special.test(password)
  );
};


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      setError(
        "Password must have 8+ characters, include uppercase, lowercase, number & special character."
      );
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    navigate("/otp");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="bg-black border border-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">REGISTER</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full p-2 border border-white bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Student ID"
            value={formData.studentId}
            onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
            className="w-full p-2 border border-white bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border border-white bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-2 border border-white bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full p-2 border border-white bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition font-bold"
          >
            Send OTP
          </button>

          <p
            onClick={() => navigate("/login")}
            className="text-center text-blue-400 hover:underline cursor-pointer"
          >
            Back to Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
