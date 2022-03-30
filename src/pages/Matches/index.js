import React from 'react'
import PageHeader from '../../components/PageHeader'
import MatchesList from './MatchesList'

export default function Champions() {
  return (
    <section>
      <PageHeader
        headerData={{
          pageName: 'MATCHES',
          season: '2022 Spring Season',
          split: 'split2',
          date: 'Ends in in 22 days'
        }}
      />
      <MatchesList />
    </section>
  )
}
