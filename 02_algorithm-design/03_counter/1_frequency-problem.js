function sameFrequency(str1, str2) {
  if (str1.length !== str2.length) return false

  const genCounter = (arr) => {
    return arr.reduce((acc, cur) => {
      if (!acc?.[cur]) {
        acc[cur] = 1
      } else {
        acc[cur] += 1
      }
      return acc
    }, {})
  }
  const counter1 = genCounter(str1.split(''))
  const counter2 = genCounter(str2.split(''))

  for (const property in counter1) {
    if (!counter2[property]) {
      console.log('X')
      return false
    } else if (counter1[property] !== counter2[property]) {
      console.log('X')
      return false
    }
  }
  console.log('O')
  return true
}

sameFrequency('aabb', 'bbaa')
sameFrequency('abc', 'zyx')
