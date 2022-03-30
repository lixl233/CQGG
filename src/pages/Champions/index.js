import React, { useState, useEffect, useContext } from 'react'
import PageHeader from '../../components/PageHeader'
import ChampionsList from './ChampionsList'
import { context } from '../../App'
import { getSearchList } from '../../utils/getSearchList'

export default function Champions() {
  const ctx = useContext(context)
  const [championsData, setChampionsData] = useState([])
  const [championsList, setChampionsList] = useState([])
  const [inputValue, setInputValue] = useState()

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    setChampionsData(!ctx.champions ? [] : Object.values(ctx.champions))
  }, [ctx])

  // console.log('@champions >>', championsData)
  useEffect(() => {
    setChampionsList(getSearchList(championsData, inputValue))
  }, [championsData, inputValue])

  return (
    <section>
      <PageHeader
        headerData={{
          pageName: 'CHAMPIONS',
          season: '2022 Spring Season',
          split: 'split2',
          date: 'Ends in in 22 days'
        }}
      />
      <div className="mt-6 border-y-2 border-y-input-border">
        <input
          type="text"
          placeholder="Search Champions"
          onChange={handleInputChange}
          className="w-38 md:w-1/5 h-10 my-4 px-4 py-2 mr-10 font-bold bg-input-bg border-input-border"
        />
      </div>
      <ChampionsList
        championsList={!championsList.length ? championsData : championsList}
      />
    </section>
  )
}
