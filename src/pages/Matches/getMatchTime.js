function getMatchTime(matchStart) {
  const isoDate = new Date().toISOString()
  const monthDiff = isoDate[6] - matchStart[6]
  const dayDiff =
    [isoDate[8], isoDate[9]].join('') - [matchStart[8], matchStart[9]].join('')
  const hourDiff =
    [isoDate[11], isoDate[12]].join('') -
    [matchStart[11], matchStart[12]].join('')
  const minuteDiff =
    [isoDate[14], isoDate[15]].join('') -
    [matchStart[14], matchStart[15]].join('')
  return monthDiff >= 1
    ? `${monthDiff} Monthes Ago`
    : dayDiff >= 1
    ? `${dayDiff} Days Ago`
    : hourDiff >= 1
    ? `${hourDiff} Hours Ago`
    : `${minuteDiff} Minutes Ago`
}

export { getMatchTime }
