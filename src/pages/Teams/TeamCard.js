import React, { useState, useEffect, useContext } from 'react'
import { getTeamData, getClassName } from '../../utils/getTeamData'
import { context } from '../../App'
import { useNavigate } from 'react-router-dom'

export default function TeamCard(props) {
  const { team } = props
  const ctx = useContext(context)
  const [teamData, setTeamData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    setTeamData(getTeamData(team, ctx.leaderboard))
  }, [ctx, team])
  // console.log('@TeamCard', teamData)
  return (
    <li className="relative bg-list-color border-input-border border-2">
      <div
        className={`flex items-center relative h-28 overflow-hidden border-l-2 ${getClassName(
          teamData.tag
        )}`}
      >
        <img
          src={require(`../../assets/team/${
            !teamData.tag ? 'LCS' : teamData.tag
          }.png`)}
          alt={teamData.tag}
          className="w-52 absolute -right-12 -top-8 grayscale opacity-5"
        />
        <img
          src={require(`../../assets/team/${
            !teamData.tag ? 'LCS' : teamData.tag
          }.png`)}
          alt={teamData.tag}
          className="w-20 mx-4"
        />
        <div>
          <h3 className="text-2xl font-bold">{teamData.teamName}</h3>
          <div>
            <span className="mr-6">
              <span className="text-input-font">LP:</span>
              <span className="font-bold">{teamData.teamLp}</span>
            </span>
            <span>
              <span className="text-input-font">Games:</span>
              <span className="font-bold">{teamData.games}</span>
            </span>
          </div>
        </div>
      </div>
      <div
        className={`text-center p-4 border-l-2 border-opacity-40 ${getClassName(
          teamData.tag
        )}`}
      >
        <div className="grid grid-cols-5 text-xs h-11 leading-team-player">
          <span className="col-span-2 text-left ml-2 md:ml-16">NAME</span>
          <span>RANK</span>
          <span>LP</span>
          <span>W/L</span>
        </div>
        {/* TODO: 滚动条样式 */}
        <ol className="h-72 overflow-y-auto team-player-list">
          {!teamData.players ? (
            <div>Loading</div>
          ) : (
            teamData.players.map((player, index) => {
              return (
                <li
                  onClick={() => {
                    navigate(`/players/${player.name}`)
                  }}
                  key={index}
                  className="grid grid-cols-5 h-11 leading-team-player hover:bg-list-hover"
                >
                  <span className="col-span-2 truncate text-left ml-2 md:ml-16">
                    {player.name}
                  </span>
                  <span>{player.rank}</span>
                  <span>{player.lp}</span>
                  <span>{`${player.wins}/${player.losses}`}</span>
                </li>
              )
            })
          )}
        </ol>
      </div>
    </li>
  )
}
