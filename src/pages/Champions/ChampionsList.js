import React from 'react'

function ChampionsList(props) {
  console.log('@champions list ', props)
  const { championsList } = props
  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-7 text-center mt-4 mb-2 py-4 text-sm">
        <span className="col-span-2">NAME</span>
        <span>GAMES</span>
        <span>WR</span>
        <span className="hidden md:inline">W/L</span>
        <span>KDA</span>
        <span className="hidden md:inline">CS/G</span>
      </div>
      <ul>
        {championsList.map((champion, index) => {
          return (
            <li
              className="grid grid-cols-6 md:grid-cols-7 text-center font-bold p-2 md:p-4 h-22 md:h-22 leading-56 bg-input-bg border-y-2 border-bg-color hover:bg-list-hover"
              key={index}
            >
              <span className="col-span-3 md:col-span-2 flex items-center">
                <img
                  src={champion.avatar}
                  alt={champion.name}
                  className="h-8 md:h-14 m-0"
                />
                <span className="text-lg truncate  leading-56 ml-2 md:ml-4">
                  {champion.name}
                </span>
              </span>
              <span>{champion.games}</span>
              <span>{`${Math.floor(champion.wr)}%`}</span>
              <span className="hidden md:inline">{`${champion.wins} / ${champion.losses}`}</span>
              <span>{champion.kda}</span>
              <span className="hidden md:inline">{champion.csg}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ChampionsList
