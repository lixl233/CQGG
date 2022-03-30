import getPlayersList from './getPlayersList'
import getChampionsList from './getChampionsList'
import getTeamsList from './getTeamsList'

function getGlobalStats(data) {
  return {
    currentPatch: data.currentPatch,
    fetchedAt: data.fetchedAt,
    loading: data.loading,
    patches: data.patches,
    seasonTitle: data.seasonTitle,
    splitEnd: data.splitEnd,
    splitTitle: data.splitTitle,
    leaderboard: data.leaderboard,
    matches: data.matches,
    players: getPlayersList({
      leaderboard: data.leaderboard,
      players: data.players
    }),
    champions: getChampionsList(data.champions),
    teams: getTeamsList(data.teams)
  }
}

export { getGlobalStats }
