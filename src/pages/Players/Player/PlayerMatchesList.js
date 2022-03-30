import React, { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import LittleMatchTeam from '../../../components/LittleMatchTeam'
import { getMatchTime } from '../../Matches/getMatchTime'
import { getPlayerMatchesList } from './getPlayerMatchesList'
import DataPanel from '../../../components/DataPanel '

export default function PlayerMatchesList(props) {
  const playerData = props.playerData
  const [playerMatchesList, setPlayerMatchesList] = useState({})
  let [isOpen, setIsOpen] = useState(false)
  const [currentMatch, setCurrentMatch] = useState()

  function handleCurrentMatch(match) {
    setCurrentMatch(match)
    setIsOpen(true)
  }

  useEffect(() => {
    setPlayerMatchesList(getPlayerMatchesList(playerData))
  }, [playerData])
  // console.log('@#@', playerMatchesList)
  return (
    <ul className="mt-10">
      {!playerMatchesList.matches ? (
        <h1 className="text-5xl">Loading...</h1>
      ) : (
        playerMatchesList.matches.map((match, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleCurrentMatch(match)
              }}
              // className="flex justify-between p-5 bg-input-bg hover:bg-list-hover border-y-2 border-bg-color"
              className={`flex flex-col md:flex-row justify-between p-5 border-y-2 border-bg-color bg-gradient-to-r ${
                match.record.winner
                  ? 'from-vc to-black hover:from-vc-hov'
                  : 'from-de hover:from-de-hov to-black'
              }`}
            >
              <div className="flex">
                <img
                  src={match.record.championAvatar}
                  alt="championAvatar"
                  className="w-14"
                />
                <div className="flex flex-col ml-4">
                  <div className="text-base flex">
                    <div className="font-bold">
                      {match.record.winner ? (
                        <span className="text-font-victory">VICTORY</span>
                      ) : (
                        <span className="text-font-defeat">DEFEAT</span>
                      )}
                    </div>
                    <div className="ml-4">{getMatchTime(match.matchStart)}</div>
                  </div>
                  <div className="flex">
                    <div>
                      <span className="text-font-low-color mr-2">KDA:</span>
                      <span>{match.record.kills}</span>/
                      <span>{match.record.deaths}</span>/
                      <span>{match.record.assists}</span>
                    </div>
                    <div className="ml-6">
                      <span className="text-font-low-color mr-2">CS:</span>
                      <span>{match.record.cs}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-4 md:mt-0">
                <LittleMatchTeam team={match.teams[0]} />
                <div className="w-4"></div>
                <LittleMatchTeam team={match.teams[1]} />
              </div>
            </li>
          )
        })
      )}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
          <div className="relative rounded mx-auto">
            <DataPanel match={currentMatch} />
          </div>
        </div>
      </Dialog>
    </ul>
  )
}
