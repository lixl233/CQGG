// import logo from './logo.svg';
import React, { createContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Players from './pages/Players'
import Player from './pages/Players/Player'
import Champions from './pages/Champions'
import Matches from './pages/Matches'
import Teams from './pages/Teams'
import { getGlobalStats } from './utils/getGlobalStats'

const API_URL = 'http://47.94.194.102:3000/cqapi'

// 创建上下文
export const context = createContext({})

function App() {
  const [globalStats, setGlobalStats] = useState({})

  useEffect(() => {
    const fetchGlobalStats = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setGlobalStats(getGlobalStats(data))
    }
    fetchGlobalStats()
    const intervalId = setInterval(fetchGlobalStats, 10000000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="App h-screen bg-bg-color text-font-color">
      <Menu />
      <context.Provider value={{ ...globalStats }}>
        <div className="ml-16 md:ml-72 pr-1 md:pr-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />}></Route>
            <Route path="/players/:playerName" element={<Player />} />
            <Route path="/champions" element={<Champions />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </div>
      </context.Provider>
    </div>
  )
}

export default App
