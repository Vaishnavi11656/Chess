//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from './pages/Signup';
import { Lobby } from './pages/Lobby';
import { Navbar } from "./components/Navbar";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "./slices/authSlice";
import { Room } from "./pages/Room";
import { LeaderBoard } from "./pages/Leaderboard";
import { Profile } from "./pages/profile";
import { Guest } from "./pages/Guest";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe())
  }, [dispatch])
  //const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route element={<Navbar />}>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/guest" element={<Guest />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/rooms/:roomCode" element={<Room />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes >
  )
}






export default App
