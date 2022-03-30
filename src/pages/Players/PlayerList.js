import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlayerList(props) {
  const navigate = useNavigate()
  const { id, avatar, name, rank, lp, kda, wr, wins, losses } = props.data
  return (
    <li
      onClick={() => {
        navigate(`/players/${name}`)
      }}
      className="grid grid-cols-5 md:grid-cols-7 text-center font-bold leading-6 md:leading-player-list-lh p-4 h-22 md:h-22 bg-input-bg border-y-2 border-bg-color hover:bg-list-hover"
      key={id}
    >
      <span className="col-span-2 flex">
        <img
          src={avatar}
          alt={name}
          className="hidden md:inline w-20 rounded-full"
        ></img>
        <span className="truncate">{name}</span>
      </span>
      <span>{rank}</span>
      <span>{lp}</span>
      <span className="hidden md:inline">{kda}</span>
      <span>{`${Math.floor(wr)}%`}</span>
      <span className="hidden md:inline">{`${wins} / ${losses}`}</span>
    </li>
  )
}
