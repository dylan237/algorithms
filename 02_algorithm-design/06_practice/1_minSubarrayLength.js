function minSubLength(arr, sum) {
  let start = 0
  let end = 0
  let total = 0
  let minLength = Infinity

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end]
      end++
    } else if (total >= sum) {
      let currentLength = end - start
      if (currentLength < minLength) {
        minLength = currentLength
      }
      total -= arr[start]
      start++
    } else if (end >= arr.length) {
      break
    }
  }
  if (minLength === Infinity) {
    return 0
  } else {
    return minLength
  }
}

minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11) // 2

/***  

流程：
0. 宣告兩個 pointer，start 和 end，預設都是 0，指向 arr 第一個元素
1. 透過 while loop 不斷遞增 end 指標，並將他曾指向過的元素做加總，記錄在 total 變數中
2. 當 total 大於等於 sum 時，start 和 end 即是符合元素總和大於 sum 的 Sub Array 範圍，並將此 Sub Array 的長度記錄在 minLength 變數中
3. 同時，把 start 指到的元素從 total 扣除，並將 start 指標遞增，試著縮小 Sub Array length 範圍
4. 之後會再次進入 while 迴圈，判斷範圍縮小後，total 是否仍然大於 sum
5. 若仍然大大於 sum，我們就找到了 length 更小的 Sub Array，此時會再次更新 minLength；反之則會繼續遞增 end 指標。
6. 直到 end 指標超出 arr 長度後，結束 while loop

 start, end
   |
  [9, 8, 1, 4, 9, 5, 1, 2]   -> total: 9; ❌ 9 < 11; end++

 start end
   |   |
  [9,  8, 1, 4, 9, 5, 1, 2]  -> total: 9 + 8 = 17; ✅ 17 > 11; minLength: [9, 8] -> 2; total: 17 - 9 = 8; start++

    start, end
       |
  [9,  8, 1, 4, 9, 5, 1, 2]  -> total: 8; ❌ 8 < 11; minLength: 2; end++

   start  end
       |  |
  [9,  8, 1, 4, 9, 5, 1, 2]  -> total: 8 + 1 = 9; ❌ 9 < 11; minLength: 2; end++

   start    end
       |     |
  [9,  8, 1, 4, 9, 5, 1, 2]  -> total: 9 + 4 = 13; ✅ 13 > 11; minLength: [8, 4] -> 2; total: 13 - 8 = 5; start++

    .
    .
    .
*/
