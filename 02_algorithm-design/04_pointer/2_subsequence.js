/* 
  解題思路：
    1. 如果 subsequence 為空，直接通過(空字串會是任何字串的 subsequence)
    2. 宣告一個 pointer 為 0，用來代表 subsequence 字串的首個字母
    3. 遍歷原始字串，逐一與 pointer 指向的 subsequence 中對應索引的字母比對，若字母一樣，就將該字母存入 compareArr 中，代表比對到了一個相同字母
    4. 隨後 pointer 要加 1，重複上步驟，繼續比對後面的字母
    5. 當原始字串遍歷結束後，去比對 compareArr 與 subsequence 字串是否為一樣的單字
*/

function isSubsequence(subsequence, origin) {
  if (!subsequence.length) return true
  let pointer = 0
  const subsequenceArr = subsequence.split('')
  const originArr = origin.split('')
  const compareArr = []
  for (let i = 0; i < origin.length; i++) {
    if (subsequenceArr.length === pointer) {
      return true
    }
    if (originArr[i] === subsequenceArr[pointer]) {
      compareArr.push(originArr[i])
      pointer++
    }
  }
  return compareArr.join('') === subsequence
}

isSubsequence('book', 'brooklyn') // true
isSubsequence('abc', 'acb') // false (order matters)
