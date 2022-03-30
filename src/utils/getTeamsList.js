export default function getTeamsList(teams) {
  const teamsArray = Object.values(teams)

  teamsArray.sort((a, b) => {
    return b.wins - a.wins
  })

  const teamsList = []

  teamsArray.forEach((item) => {
    teamsList.push(item)
  })

  return teamsList
}
