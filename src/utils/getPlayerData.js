function getPlayerData(playerName, players, matches) {
  console.log('@getPlayerData')
  const playerData = {
    player: {},
    matches: []
  }
  if (!players || !matches) {
    return playerData
  }
  for (let i = 0; i < players.length; i++) {
    if (players[i].name === playerName) {
      playerData.player = players[i]
      break
    }
  }

  playerData.rank =
    playerData.player.rank === 1
      ? '1st'
      : playerData.player.rank === 2
      ? '2nd'
      : playerData.player.rank === 3
      ? '3rd'
      : `${playerData.player.rank}th`

  matches.forEach((match) => {
    if (isInMatch(playerName, match)) {
      playerData.matches.push(match)
    }
  })
  return playerData
}

// 判断某场游戏中是否有该玩家
function isInMatch(name, match) {
  let res = false
  match.teams.forEach((team) => {
    team.players.forEach((player) => {
      if (player.name === name) {
        res = true
      }
    })
  })
  return res
}

export { getPlayerData }
