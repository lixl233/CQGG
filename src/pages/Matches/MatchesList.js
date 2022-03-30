import React, { useState, useEffect, useContext } from 'react'
import { Dialog } from '@headlessui/react'
import MatchTeam from './MatchTeam'
import DataPanel from '../../components/DataPanel '
import { context } from '../../App'
import { getMatchTime } from './getMatchTime'

export default function MatchesList() {
  const ctx = useContext(context)
  const [matchesList, setMatchesList] = useState([])
  let [isOpen, setIsOpen] = useState(false)
  const [currentMatch, setCurrentMatch] = useState()

  useEffect(() => {
    setMatchesList(ctx.matches)
  }, [ctx])
  console.log('@MATCHES_LIST', matchesList)

  function handleCurrentMatch(match) {
    setCurrentMatch(match)
    setIsOpen(true)
  }

  return (
    <ul className="mt-4 md:mt-10">
      {!matchesList ? (
        <h1 className="text-5xl">Loading...</h1>
      ) : (
        matchesList.map((match, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleCurrentMatch(match)
              }}
              className="flex flex-col md:flex-row justify-between p-2 md:p-5 bg-input-bg hover:bg-list-hover border-y-2 border-bg-color"
            >
              <div>{getMatchTime(match.matchStart)}</div>
              <div className="flex flex-col md:flex-row">
                <MatchTeam team={match.teams[0]} />
                <div className="w-8"></div>
                <MatchTeam team={match.teams[1]} />
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
