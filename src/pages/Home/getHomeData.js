function getHomeData(players, champions, teams) {
  if (!players || !champions || !teams) return {}
  const homeData = { players: [], champions: [], teams: [] }
  for (let i = 0; i < 5; i++) {
    homeData.players.push(players[i])
    homeData.champions.push(champions[i])
    homeData.teams.push(teams[i])
  }
  return homeData
}

export { getHomeData }
