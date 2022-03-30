function getTeamData(team, leaderboard) {
  if (!team || !leaderboard) {
    return {}
  }
  const teamPlayers = getTeamPlayers(team.players, leaderboard)
  return {
    teamName: getTeamName(team.tag),
    teamIcon: getTeamIcon(team.tag),
    tag: team.tag,
    games: team.games,
    teamLp: getTeamLP(teamPlayers),
    players: teamPlayers
  }
}
// 获取战队总lp
function getTeamLP(teamPlayers) {
  if (!teamPlayers) {
    return 0
  }
  let teamLp = 0
  teamPlayers.forEach((player) => {
    teamLp += player.lp
  })
  return teamLp
}

// 获取战队选手数据
function getTeamPlayers(players, leaderboard) {
  if (!leaderboard || !players) {
    return []
  }
  const playersList = Object.keys(players)
  let teamPlayersList = []
  playersList.forEach((player) => {
    teamPlayersList.push({
      name: player,
      rank: leaderboard[player].rank,
      lp: leaderboard[player].lp,
      wins: leaderboard[player].wins,
      losses: leaderboard[player].losses
    })
  })
  return teamPlayersList
}

function getClassName(tag) {
  switch (tag) {
    case 'C9':
      return 'border-l-C9'
    case 'CLG':
      return 'border-l-CLG'
    case 'TL':
      return 'border-l-TL'
    case 'IMT':
      return 'border-l-IMT'
    case 'FLY':
      return 'border-l-FLY'
    case 'EG':
      return 'border-l-EG'
    case 'GG':
      return 'border-l-GG'
    case '100':
      return 'border-l-100'
    case 'TSM':
      return 'border-l-TSM'
    case 'DIG':
      return 'border-l-DIG'
    default:
      return 'border-l-C9'
  }
}

// 获取战队全名
function getTeamName(tag) {
  switch (tag) {
    case 'C9':
      return 'Cloud 9'
    case 'CLG':
      return 'Counter Logic Gaming'
    case 'TL':
      return 'Team Liquid'
    case 'IMT':
      return 'Immortals Progressive'
    case 'FLY':
      return 'FlyQuest'
    case 'EG':
      return 'Evil Geniuses'
    case 'GG':
      return 'Golden Guardians'
    case '100':
      return '100 Thieves'
    case 'TSM':
      return 'TSM'
    case 'DIG':
      return 'Dignitas QNTMPAY'
    default:
      return 'LCS'
  }
}

// 获取战队图标
function getTeamIcon(tag) {
  switch (tag) {
    case 'C9':
      return 'https://am-a.akamaihd.net/image?resize=250:&f=http…om%2Fteams%2F1631820065346_cloud9-2021-worlds.png'
    case 'CLG':
      return 'https://am-a.akamaihd.net/image?resize=80:&f=http%…590248482_CounterLogicGamingCLG-01-FullonDark.png'
    case 'TL':
      return 'https://am-a.akamaihd.net/image?resize=250:&f=http…ts.com%2Fteams%2F1631820014208_tl-2021-worlds.png'
    case 'IMT':
      return 'https://am-a.akamaihd.net/image?resize=250:&f=http…static.lolesports.com%2Fteams%2Fimt-new-color.png'
    case 'FLY':
      return 'https://am-a.akamaihd.net/image?resize=250:&f=http…lolesports.com%2Fteams%2Fflyquest-new-on-dark.png'
    case 'EG':
      return 'https://am-a.akamaihd.net/image?resize=80:&f=http%…%2F1592590374862_EvilGeniusesEG-01-FullonDark.png'
    case 'GG':
      return 'https://am-a.akamaihd.net/image?resize=250:&f=http…592590586919_GoldenGuardiansGGS-01-FullonDark.png'
    case '100':
      return 'https://am-a.akamaihd.net/image?resize=80:&f=http%….com%2Fteams%2F1631819887423_100t-2021-worlds.png'
    case 'TSM':
      return 'https://am-a.akamaihd.net/image?resize=80:&f=http%…%2Fteams%2F1592590917094_TSMTSM-01-FullonDark.png'
    case 'DIG':
      return 'https://am-a.akamaihd.net/image?resize=80:&f=http%…%2Fteams%2F1592590917094_TSMTSM-01-FullonDark.png'
    default:
      return 'https://am-a.akamaihd.net/image?resize=120:&f=http…lesports.com%2Fleagues%2FLCSNew-01-FullonDark.png'
  }
}

export { getTeamData, getClassName, getTeamName }
