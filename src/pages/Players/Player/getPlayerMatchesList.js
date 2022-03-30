import getChampionAvatar from '../../../utils/getChampionAvatar'

function getPlayerMatchesList(playerData) {
  if (!playerData) {
    return {}
  }
  const { player, matches } = playerData
  const playerMatchesList = {
    player: player,
    matches: []
  }
  matches.forEach((item) => {
    const record = getGameRecord(player.name, item)
    item.record = record
    playerMatchesList.matches.push(item)
  })

  return playerMatchesList
}

function getGameRecord(playerName, match) {
  const record = {}
  for (let i = 0; i < match.teams.length; i++) {
    const res = isInTeam(match.teams[i].players, playerName)
    if (res.isIn) {
      const player = match.teams[i].players[res.index]
      record.teamIndex = i
      record.winner = match.teams[i].winner
      record.kills = player.kills
      record.deaths = player.deaths
      record.assists = player.assists
      record.cs = player.cs
      record.championAvatar = getChampionAvatar(player.championIcon)
    }
  }
  return record
}

// 判断队伍里是否有该玩家
function isInTeam(players, playerName) {
  let res = { index: 0, isIn: false }
  players.forEach((item, index) => {
    if (item.name === playerName) {
      res.index = index
      res.isIn = true
    }
  })
  return res
}

export { getPlayerMatchesList }
