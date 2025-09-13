import React from 'react'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import './App.css'
import Otp from "./pages/Otp.jsx"
import LandingPage from './pages/LandingPage.jsx'
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/" element={<LandingPage/>}/>
        </Routes>
    </Router>
  )
}

export default App
