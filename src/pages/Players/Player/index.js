import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../../../App'
import PlayerMatchesList from './PlayerMatchesList'
import { getPlayerData } from '../../../utils/getPlayerData'

function Player() {
  const param = useParams()
  const ctx = useContext(context)
  const [playerData, setPlayerData] = useState()

  useEffect(() => {
    setPlayerData(getPlayerData(param.playerName, ctx.players, ctx.matches))
  }, [ctx, param])

  // console.log('@Player >><<', param.playerName, playerData)

  return (
    <section>
      <header className="flex pt-16">
        <div>
          <img
            src="https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1641936348175_placeholder.png"
            alt="暂未匹配选手图片"
            className="w-24 rounded-full"
          />
        </div>
        <div className="ml-2 md:ml-6">
          <h1 className="text-3xl md:text-5xl font-black leading-player-list-lh">
            {param.playerName}
          </h1>
          <span className="text-sm md:text-lg text-font-low-color">
            <span className="mr-1 md:mr-6">2022 Spring Season</span>
            <span>Split 2</span>
          </span>
        </div>
      </header>
      {!playerData ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="text-2xl font-black md:mt-10 my-4 py-2 flex border-y-2 border-input-border">
            <div className="mr-12">
              <h3>{playerData.rank}</h3>
              <span className="text-xs text-font-low-color">RANK</span>
            </div>
            <div className="mr-12">
              <h3>{playerData.player.lp}</h3>
              <span className="text-xs text-font-low-color">LP</span>
            </div>
            <div className="mr-12 flex items-center">
              <div>
                <h3 className="text-blue">{playerData.player.wr + '%'}</h3>
                <span className="text-xs text-font-low-color">WR</span>
              </div>
              <span className="hidden md:inline text-base ml-4 text-font-low-color">{`${playerData.player.wins}W-${playerData.player.losses}L`}</span>
            </div>
            <div className="mr-12">
              <h3>{playerData.player.kda}</h3>
              <span className="text-xs text-font-low-color">KDA</span>
            </div>
          </div>
          <div>
            <PlayerMatchesList playerData={playerData} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Player
