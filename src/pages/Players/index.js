import React, { useState, useContext, useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import PlayersList from './PlayersList'
import { context } from '../../App'
import { getSearchList } from '../../utils/getSearchList'

export default function Players() {
  const ctx = useContext(context)
  const [playersData, setPlayersData] = useState([])
  const [playersList, setPlayersList] = useState([])
  const [inputValue, setInputValue] = useState()
  const [isSelectTeam, setIsSelectTeam] = useState(false)
  const [nowTeam, setNowTeam] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSelectTeam = () => {
    setIsSelectTeam(true)
  }
  const handleGetTeamPlayer = (tag) => {
    if (tag === nowTeam) {
      setInputValue('')
    } else {
      setNowTeam(tag)
      setInputValue(tag)
    }
    setIsSelectTeam(false)
  }

  useEffect(() => {
    setPlayersData({
      players: ctx.players,
      teams: ctx.teams
    })
  }, [ctx])

  useEffect(() => {
    setPlayersList(getSearchList(playersData.players, inputValue))
  }, [inputValue, playersData])

  // console.log('@PLAYERS >>', ctx)
  return (
    <section>
      <PageHeader
        headerData={{
          pageName: 'PLAYERS',
          season: '2022 Spring Season',
          split: 'split2',
          date: 'Ends in in 22 days'
        }}
      />
      <div className="mt-6 border-y-2 border-y-input-border">
        <input
          type="text"
          placeholder="Search Players"
          onChange={handleInputChange}
          className="w-36 md:w-1/5 h-10 px-4 py-2 my-4 mr-2 md:mr-10 font-bold bg-input-bg border-input-border border-2"
        />
        {isSelectTeam ? (
          <ol className="absolute left-players-teams-list top-48 w-1/5 bg-bg-color border-2 border-input-border">
            {!playersData.teams ? (
              <div>Loading...</div>
            ) : (
              playersData.teams.map((team, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleGetTeamPlayer(team.tag)
                    }}
                    className="flex w-full py-2 px-4 font-bold leading-10 hover:bg-list-hover"
                  >
                    <img
                      src={require(`../../assets/team/${team.tag}.png`)}
                      alt={`${team.tag}战队队标`}
                      className="w-10 mr-4"
                    />
                    <span className="block w-20">{team.tag}</span>
                  </li>
                )
              })
            )}
          </ol>
        ) : (
          <button
            onClick={handleSelectTeam}
            className="hidden md:inline-block w-1/5 h-10 my-4 px-4 py-2 font-bold bg-input-bg border-input-border border-2"
          >
            <span>Select a Team</span>
          </button>
        )}
      </div>
      <PlayersList data={!playersList ? playersData.players : playersList} />
    </section>
  )
}
