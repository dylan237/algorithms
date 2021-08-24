function palindrome(str) {
  if (!str || typeof str !== 'string') return
  const arr = str.split('')
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    if (arr[left] === arr[right]) {
      left++
      right--
    } else {
      console.log(`${str} is not a palindrome!`)
      return false
    }
  }
  console.log(`${str} is a palindrome!`)
  return true
}

palindrome('tacocat')
palindrome('foobar')
