import React, { useState, useEffect, useContext } from 'react'
import PageHeader from '../../components/PageHeader'
import TeamCard from './TeamCard'
import { context } from '../../App'

export default function Teams() {
  const ctx = useContext(context)
  const [teamsData, setTeamData] = useState([])
  useEffect(() => {
    setTeamData(ctx.teams)
  }, [ctx])
  console.log('@Teams', teamsData)
  return (
    <section>
      <PageHeader
        headerData={{
          pageName: 'TEAMS',
          season: '2022 Spring Season',
          split: 'split2',
          date: 'Ends in in 22 days'
        }}
      />
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {!teamsData ? (
          <div>Loading</div>
        ) : (
          teamsData.map((team, index) => {
            return <TeamCard team={team} key={index} />
          })
        )}
      </ol>
    </section>
  )
}
