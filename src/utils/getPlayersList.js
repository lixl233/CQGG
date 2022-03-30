// 计算 kda
function getKda(kills, deaths, assists) {
  let kda = (assists + kills) / deaths
  return kda.toFixed(1)
}
// 计算胜率
function getWR(wins, losses) {
  let wr = wins / (wins + losses)
  return wr.toFixed(2) * 100
}

/**
 *
 * @param {leaderboard, players} playerData
 * @returns playersList
 */
const getPlayersList = function (playerData) {
  if (!playerData.leaderboard || !playerData.players) {
    return []
  }
  // console.log('@getPlayLists', playerData)
  const leaderboard = Object.values(playerData.leaderboard)
  const players = playerData.players

  leaderboard.sort((a, b) => {
    return b.lp - a.lp
  })

  const playersList = []

  leaderboard.forEach((item, index) => {
    playersList.push({
      id: index,
      avatar:
        'https://am-a.akamaihd.net/image?resize=375:&f=http%3A%2F%2Fstatic.lolesports.com%2Fplayers%2F1641936348175_placeholder.png',
      name: item.name,
      rank: item.rank,
      lp: item.lp,
      kda: getKda(
        players[item.name].kills,
        players[item.name].deaths,
        players[item.name].assists
      ),
      wr: getWR(item.wins, item.losses),
      wins: item.wins,
      losses: item.losses
    })
  })

  return playersList
}

export default getPlayersList
