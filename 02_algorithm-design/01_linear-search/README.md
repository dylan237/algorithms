## 什麼是 Linear Search?

Linear Search (簡易搜尋)，或稱 Sequential Search。是一種最單純的搜尋演算法，時間複雜度為 O(n)，這代表執行步驟會跟著 input `n` 等比例的增加。例如當 n = 8，程式就會在 8 個步驟完成。

![](https://www.tutorialspoint.com/data_structures_algorithms/images/linear_search.gif)
圖片來源： https://www.tutorialspoint.com

## 實作 Linear Search

**目標： 實作一個函數，接收兩個參數，一個陣列，和一個 target，回傳陣列中 target 的 index 值，若沒找到回傳 -1**

```js
linearSearch([1, 2, 3, 4, 5], 2) // output: 1
```

和 JS 的 `Array.indexOf` 效果一樣的函數

```js
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.log(`find element ${target} at index of ${i}`)
      return i
    }
  }
  console.log(`Cannot find ${target}`)
  return -1
}

linearSearch([1, 2, 3, 4, 5], 2) // output: 1
```

## Reference

[資料結構與演算法 (JavaScript) - 22. Linear Search](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25102424#questions)
