import React from 'react'
import getChampionAvatar from '../utils/getChampionAvatar'

export default function LittleMatchTeam(props) {
  const { players, winner } = props.team

  if (winner) {
    return (
      <ul className="flex">
        {players.map((item, index) => {
          return (
            <li
              key={index}
              className="w-12 truncate text-win-color flex flex-col justify-center"
            >
              <img
                className="w-8 border border-win-color"
                src={getChampionAvatar(item.championIcon)}
                alt={item.championIcon}
              />
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
          <li
            key={index}
            className="w-12 truncate flex flex-col justify-center"
          >
            <img
              className="w-8"
              src={getChampionAvatar(item.championIcon)}
              alt={item.championIcon}
            />
          </li>
        )
      })}
    </ul>
  )
}
