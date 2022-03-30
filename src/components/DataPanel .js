import React from 'react'
import getChampionAvatar from '../utils/getChampionAvatar'
import { useNavigate } from 'react-router-dom'

function DataPanel(props) {
  const { match } = props
  console.log('@DataPanel', match)
  return (
    <div
      className={`flex flex-col md:flex-row p-8 border-2 border-list-border from-panel-vc to-panel-de ${
        firstWin(match)
          ? 'border-l-font-victory bg-gradient-to-r'
          : 'border-r-font-victory bg-gradient-to-l'
      }`}
    >
      <TeamDataPanel data={match.teams[0]} />
      <div className="mx-8"></div>
      <TeamDataPanel data={match.teams[1]} />
    </div>
  )
}

function firstWin(match) {
  if (match.teams[0].players.winner) {
    return true
  }
  return false
}

function TeamDataPanel(props) {
  const { score, winner, players } = props.data
  const navigate = useNavigate()
  const win = isWin(winner)

  return (
    <div>
      <h3
        className={`text-3xl font-bold ${
          score === 1
            ? 'text-right text-font-victory'
            : 'text-left text-font-defeat'
        }`}
      >
        {win}
      </h3>
      <div
        className={`flex items-center justify-between text-sm mt-6 mb-4 text-center text-fontcolor-2 ${
          score === 1 ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        <span className={`ml-12 mr-14 w-16`}>Player</span>
        <span className="w-16 mx-2">KDA</span>
        <span className="w-12 mx-2">CS</span>
        <span className="w-12 mx-2">Gold</span>
      </div>
      <ul>
        {players.map((player, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                navigate(`/players/${player.name}`)
              }}
              className={`flex items-center justify-between my-4 text-base text-center hover:bg-list-hover text-fontcolor-2 ${
                score === 1 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div
                className={`w-40 flex items-center ${
                  score === 1 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <img
                  src={getChampionAvatar(player.championIcon)}
                  className={`w-10 ${score === 1 ? 'mr-2' : 'ml-2'}`}
                  alt="champion icon"
                />
                <span className="text-font-color">{player.name}</span>
              </div>
              <span className="w-16 mx-2">
                {player.kills + '/' + player.deaths + '/' + player.assists}
              </span>
              <span className="w-12 mx-2">{player.cs}</span>
              <span className="w-12 mx-2">{player.gold}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function isWin(winner) {
  let res
  if (winner) {
    res = 'VICTORY'
  } else {
    res = 'DEFEAT'
  }
  return res
}

export default DataPanel
