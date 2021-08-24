## 什麼是 Selection Sort?

選擇排序法在效能上來說，一樣不是特別有效率，它和以上兩種排序一樣是差不多的，Big O Notation 是 `O(n^2)`

## Selection Sort 的概念

雖然把選擇排序排在這個章節的最後，但我認為他是這個章節中最好理解的一種排序法，他的概念就是：

> 從右邊找到最小的值，然後丟到左邊

**Selection Sort 運作方式**

![](https://miro.medium.com/max/1102/1*H2bCd6eoIONJIUnG5Jm9sQ.gif)

圖片來源： https://miro.medium.com

## 實作

```js
function selectionSort(arr) {
  const n = arr.length

  // 有幾個元素，就要找幾輪的最小值
  for (let i = 0; i < n; i++) {
    // 記錄當前最小值的索引，先預設第一個元素是最小的
    let minIdx = i

    // 從還沒排好的元素開始找最小值
    // 這邊的 j，代表 j 以前的元素都排序好了
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }

    // 遍歷結束後，將找到的最小索引值，和起始位置值交換
    ;[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
  }

  console.log(arr)
  return arr
}

SelectionSort([3, 2, 1, 5, 4])
```

## Selection Sort 的 Big O Notation

Worst Case Performance: `O(n^2)`

Best Case Performance: `O(n^2)`

Average Case Performance: `O(n^2)`

## Reference

[資料結構與演算法 (JavaScript) - 49. Selection Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25202700#questions)

[資料結構與演算法 (JavaScript) - 50. Implement Selection Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25202720#questions)

[一起用 JavaScript 來複習經典排序法吧！](https://blog.huli.tw/2017/08/27/review-the-classical-sort-algorithm-with-javascript/)
