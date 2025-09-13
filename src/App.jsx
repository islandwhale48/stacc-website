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
        <Route path="/stacc-website/register" element={<Register/>}/> 
        <Route path="/stacc-website/login" element={<Login/>}/>
        <Route path="/stacc-website/otp" element={<Otp/>}/>
        <Route path="/stacc-website" element={<LandingPage/>}/>
        </Routes>
    </Router>
  )
}

export default App
