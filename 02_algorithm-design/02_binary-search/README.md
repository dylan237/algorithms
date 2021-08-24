## 什麼是 Binary Search?

Binary Search (二分搜尋) 是一種更進階的搜尋演算法，時間複雜度為 O(log n)。
Binary Search 使用的先決條件是，搜尋的對象必須是已排序 (sorted) 的，透過 sorted 的特性，從資料的中間元素開始查找，並判斷 target 在左半部或是右半部，進而排除一半的資料，縮小搜尋範圍。


假設有一個陣列中有一堆`由小到大`排列的數字。

```js
const arr = [2, 9, 13, 53, 89, 90, 98]
```

要在這堆數字中找到數字 `98`，用[簡易搜尋(Linear Search)](https://github.com/dylan237/algorithms-data-structures-notes/blob/master/01_algorithm-design/01_linear-search/fundamental.md)的方式就是從頭到尾一個一個搜尋，在這個例子中需使用 7 步。
二分搜尋善用`已排序`的特性，他從陣列中間點開始找，如果中間的元素小於查詢數字的話，可以得知，我想找的數字肯定在右半邊數字更大的陣列中，接著再從右半邊陣列取中間元素，重複步驟不斷縮小範圍，直到找到目標，這麼一來每執行一個步驟，都可以排除一半的 input size，效率比簡易搜尋好得多。

![](https://jorgechavez.dev/wp-content/uploads/2020/08/animation-1.gif)
圖片來源： https://jorgechavez.dev

## 實作 Binary Search

**目標： 實作一個函數，接收兩個參數，一個 sorted array of numbers，和一個 target，回傳陣列中 target 的 index 值，若沒找到回傳 -1**

```js
binarySearch([2, 9, 13, 53, 89, 90, 98], 98) // 6
```

和 JS 的 `Array.indexOf` 效果一樣的函數

```js
function binarySearch(array, target) {
  let min = 0
  let max = array.length - 1
  let step = 0
  while (min <= max) {
    step++
    let middle = Math.floor((max + min) / 2) // 陣列的中間元素
    if (target > array[middle]) {
      min = middle + 1
    } else if (target < array[middle]) {
      max = middle - 1
    } else if (target === array[middle]) {
      console.log(`Founded it after ${step} steps.`)
      console.log(`Found nubmer ${target} at position ${middle}`)
      return middle
    }
  }
  console.log(`Cannot found number ${target}`)
  return -1
}

binarySearch([2, 9, 13, 53, 89, 90, 98], 98)
/* output:  
    Founded it after 3 steps.
    Found number 98 at position 6 
*/
```

## Reference

[資料結構與演算法 (JavaScript) - 23. Binary Search](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25102646#questions)
