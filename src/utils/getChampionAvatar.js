const avatarURL = 'https://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/'

export default function getChampionAvatar(ChampionName) {
  switch (ChampionName) {
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
    case 'Fiddle Sticks':
      return 'Fiddlesticks'
    default:
      break
  }
  const name = ChampionName.replace(/\s*/g, '')
  const url = avatarURL + name + '.png'
  return url
}
