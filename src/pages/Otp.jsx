// pages/OtpPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only accept '1234' as correct
    if (otp === '1234') {
      setMessage('✅ Registration complete. Redirecting to Login...');
      setTimeout(() => navigate('/'), 1000);
    } else {
      setMessage('❌ Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-black border border-white rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-4">OTP Verification</h2>
        <p className="text-center text-sm text-gray-300 mb-4">
          Enter the 4-digit OTP
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP (e.g. 1234)"
            maxLength={4}
            className="w-full p-3 border border-white bg-black rounded text-white focus:outline-none"
            required
          />

          {message && (
            <p
              className={`text-center text-sm ${
                message.startsWith('✅') ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded font-bold"
          >
            Verify OTP
          </button>

          <p
            onClick={() => navigate('/stacc-website')}
            className="text-center text-sm mt-3 text-blue-400 hover:underline cursor-pointer"
          >
            Back to Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
