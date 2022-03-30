// 计算胜率
function getWR(wins, games) {
  let wr = wins / games
  return wr.toFixed(2) * 100
}
// 计算 kda
function getKDA(kills, deaths, assists) {
  let kda = (assists + kills) / deaths
  return kda.toFixed(1)
}
// 计算 cs/g
function getCSG(cs, gemes) {
  return Math.floor(cs / gemes)
}
// avter url
const avatarURL = 'https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/'
// 去除 name 中的空格，用于拼接图片名
function getAvterName(str) {
  switch (str) {
    case 'Wukong':
      return 'MonkeyKing'
    case "Kai'Sa":
      return 'Kaisa'
    case "Kha'Zix":
      return 'Khazix'
    case 'Dr. Mundo':
      return 'DrMundo'
    case "Cho'Gath":
      return 'Chogath'
    default:
      break
  }

  return str.replace(/\s*/g, '')
}

function getChampionsList(championsData, sortIn = 'games') {
  if (championsData === null) {
    return []
  }
  const championsList = []
  Object.values(championsData).forEach((champion) => {
    championsList.push({
      avatar: avatarURL + getAvterName(champion.name) + '.png',
      name: champion.name,
      games: champion.games,
      wr: getWR(champion.wins, champion.games),
      wins: champion.wins,
      losses: champion.games - champion.wins,
      kda: getKDA(champion.kills, champion.deaths, champion.assists),
      csg: getCSG(champion.cs, champion.games)
    })
  })
  // TODO: 根据传入参数排序
  championsList.sort((a, b) => {
    return b[sortIn] - a[sortIn]
  })

  return championsList
}
// assists: 577
// cs: 20500
// deaths: 415
// games: 96
// kills: 332
// name: "Ryze"
// patches: {12.5: true}
// wins: 40
export default getChampionsList
