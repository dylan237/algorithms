## 什麼是 Sliding Window?

這是一個相當有名的演算法，Sliding Window 是一個 `sub-list`，它會在一個 collection 上，不斷向後移動，觀察它的局部元素。

## Sliding Window 的概念

上面的定義看起來有點難懂，來看看圖解吧。
假設有一個 array `['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']`
基於 array，size 為 3 的 Sliding Window 會像一個由右往左滑動的視窗一樣，觀察這個 array，它的動態會像：

```txt
[a, b, c]
   [b, c, d]
      [c, d, e]
         [d, e, f]
            [e, f, g]
               [f, g, h]
```

執行此函數看看 sliding window 的輸出

```js
function slidingWindow(arr, size) {
  for (let i = 0; i < arr.length - size + 1; i++) {
    console.log(arr.slice(i, i + size))
  }
}

slidingWindow(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3)
```

> 補充： Sliding Window 的 size 也可以是不固定的。

## 例子 - Max and Min Sum

**目標：實作一個函數，接收一個 array of numbers 和一個 number n，函數將依序對陣列中，每三個相鄰的個數進行相加，並回傳相加後最大和最小的數**

```js
maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3) // 12
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3) // -28
```

**實作：**

```js
function maxSum(arr, size) {
  let maxSum = 0
  for (let i = 0; i < arr.length; i++) {
    let tempSum = 0
    if (i < size) {
      // 先求第一個 sliding window [2, 7, 3] 內數字總和
      maxSum += arr[i]
    } else {
      // 相鄰的兩個 window 之間差異是第一個 window 的第一個元素，與第二個 window 的最後一個元素
      // 扣掉前者，再加上後者，就可以得到下一個 window 內的元素總和
      tempSum = maxSum + arr[i] - arr[i - size]
      if (tempSum > maxSum) {
        maxSum = tempSum
      }
    }
  }
  console.log(`The max sum is ${maxSum}`)
  return maxSum
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3) // 12
```

## Reference

[資料結構與演算法 (JavaScript) - 32. Sliding Window](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25120350#overview)
