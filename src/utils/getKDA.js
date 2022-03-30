export default function getKDA(kills, deaths, assists) {
  let kda = (assists + kills) / deaths
  return kda.toFixed(1)
}
