import React, { useState, useEffect, useContext } from 'react'
import HomeList from './HomeLIst'
import HomeTeamList from './HomeTeamList'
import HomeChampionLIst from './HomeChampionList'
import { context } from '../../App'
import { getHomeData } from './getHomeData'

export default function Home() {
  const ctx = useContext(context)
  const [homeData, setHomeData] = useState(null)
  useEffect(() => {
    setHomeData(getHomeData(ctx.players, ctx.champions, ctx.teams))
  }, [ctx])

  return (
    <div className="flex  flex-col justify-center items-center">
      <header className="w-4/6 flex flex-col justify-center items-center">
        {/* <img src="../../logo.webp" alt="league of legends champions queue" /> */}
        <h1 className="text-5xl md:text-7xl mt-12 md:mt-24 text-logo-color italic">
          CHAMPIONS
        </h1>
        <h1 className="text-4xl italic text-win-color">QUEUE</h1>
        <div className="text-xl italic mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <span className="text-center">2022 Spring Season</span>
          <span className="text-center">Split 2</span>
        </div>
      </header>
      <main className="w-4/6 flex flex-col items-center">
        <input
          type="text"
          placeholder="输入选手名、英雄名或者战队名"
          className="hidden w-full h-10 px-4 py-2 mt-10 font-bold bg-input-bg border-input-border"
        />
        <div
          className="grid grid-3
        grid-cols-1 md:grid-cols-3 gap-x-4 w-full text-lg font-bold mt-8"
        >
          <div>
            <h2 className="text-sm md:text-lg">{'Highest Rated Players  >'}</h2>
            <HomeList data={!homeData ? [] : homeData.players} />
          </div>
          <div className="">
            <h2 className="text-sm md:text-lg">{'Most Played Champions  >'}</h2>
            <HomeChampionLIst data={!homeData ? [] : homeData.champions} />
          </div>
          <div className="">
            <h2 className="text-sm md:text-lg">{'Most Active Teams  >'}</h2>
            <HomeTeamList data={!homeData ? [] : homeData.teams} />
          </div>
        </div>
      </main>
    </div>
  )
}
