
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ studentId, password, onChange, onLogin }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-black border border-white p-8 rounded-xl w-full max-w-md shadow-lg">
        {/* Close Button */}
        <div className="flex justify-end">
          <button className="text-white text-xl">×</button>
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl font-extrabold mb-6 tracking-wider">LOGIN.</h1>

        {/* Student ID */}
        <input
          type="text"
          placeholder="Student Id"
          value={studentId}
          onChange={(e) => onChange(prev => ({ ...prev, studentId: e.target.value }))}
          className="w-full p-3 mb-4 border border-white bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onChange(prev => ({ ...prev, password: e.target.value }))}
          className="w-full p-3 mb-6 border border-white bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Login Button */}
        <button
          onClick={() => navigate('/')}
          className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition"
        >
          LOGIN
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Don’t have an account?{' '}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={() => navigate('/register')}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;