import React from 'react'

export default function PageHeader(props) {
  const { pageName, season, split } = props.headerData
  return (
    <header className="text-base md:text-lg pt-8 md:pt-16">
      <h1 className="text-3xl md:text-5xl font-bold">{pageName}</h1>
      <div className="text-fontcolor-2">
        <span className="mr-5">{season}</span>
        <span className="mr-5">{split}</span>
      </div>
    </header>
  )
}
