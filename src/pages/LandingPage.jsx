import React  from 'react'
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
   const navigate = useNavigate();
  return (
    <>
    <div>
      This is the landing page of STACC
    </div>
    <button
          onClick={() => navigate('/')}
          className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition"
        >
          LOGIN
        </button>
        </>
  )
}

export default LandingPage
