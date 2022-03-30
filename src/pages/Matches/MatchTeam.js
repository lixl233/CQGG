import React from 'react'
import getChampionAvatar from '../../utils/getChampionAvatar'

/*
players: (5) [{…}, {…}, {…}, {…}, {…}]
assists: 12
championIcon: "Ryze"
cs: 183
deaths: 5
gold: 11744
kills: 7
lane: "MIDDLE"
name: "BOG RJS"
spellIcon1: 3
spellIcon2: 4
score: 1
winner: true
*/

export default function MatchTeam(props) {
  const { players, winner } = props.team

  if (winner) {
    return (
      <ul className="flex">
        {players.map((item, index) => {
          return (
            <li key={index} className="w-14 mr-4 truncate text-win-color">
              <img
                className="w-14 border border-win-color"
                src={getChampionAvatar(item.championIcon)}
                alt={item.championIcon}
              />
              <span className="text-xs">{item.name}</span>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <ul className="flex">
      {players.map((item, index) => {
        return (
          <li key={index} className="w-14 mr-4 truncate">
            <img
              className="w-14"
              src={getChampionAvatar(item.championIcon)}
              alt={item.championIcon}
            />
            <span className="text-xs">{item.name}</span>
          </li>
        )
      })}
    </ul>
  )
}
