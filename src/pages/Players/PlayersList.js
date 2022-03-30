import React from 'react'
import PlayerList from './PlayerList'

export default function PlayersList(props) {
  // const playerslist = usePlayersList()
  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-7 text-center  mt-4 mb-2 py-4 text-sm">
        <span className="col-span-2">NAME</span>
        <span>RANK</span>
        <span>LP</span>
        <span className="hidden md:inline">KDA</span>
        <span>WR</span>
        <span className="hidden md:inline">WL</span>
      </div>
      <div>
        {!props.data ? (
          <h1 className="text-5xl">Loading...</h1>
        ) : (
          props.data.map((item, index) => {
            return <PlayerList data={item} key={index} />
          })
        )}
      </div>
    </div>
  )
}
