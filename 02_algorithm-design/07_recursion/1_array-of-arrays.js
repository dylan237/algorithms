let arrs = [[[['a', [['b', ['c']], ['d']]], [['e']], [[['f', 'g', 'h']]]]]]

function collector(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(collector(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(collector(arrs))
