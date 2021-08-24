function uniqueLettersString(str) {
  let start = 0
  let end = 0
  let maxStringLength = -Infinity
  const counter = {}

  while (end < str.length) {
    console.log(counter)
    if (!(str[end] in counter)) {
      counter[str[end]] = 1
      end++
      currentLength = end - start
      if (currentLength > maxStringLength) {
        maxStringLength = currentLength
      }
    } else {
      delete counter[str[start]]
      start++
    }
  }
  console.log('maxStringLength---', maxStringLength)
  return maxStringLength === -Infinity ? 0 : maxStringLength
}

uniqueLettersString('thisishowwedoit') // 6
