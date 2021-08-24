## 什麼是 Bubble Sort?

氣泡排序法是一個很簡單的排序演算法，在現實開發中其實很少使用，通常都是在一些演算法的教學上被當作一種教學工具。像是 Java 或是 Python 等現代程式語言內建的排序 API 或是 libraries 比較常看到的是一些相對複雜，但是快速有效率的排序演算法，如：快速排序(Quick Sort) 或是合併排序(Merge Sort).. 等。

## Bubble Sort 的概念

Bubble Sort 會比較相鄰的兩個 element 的大小，在順序錯誤時進行對調(swap)，讓最大的元素浮到最後，並將它標記為已排序元素。並重複兩倆比較步驟，直到所有元素排序完成。

**Bubble Sort 運作方式**
![](https://www.codesdope.com/staticroot/images/algorithm/bubble_sort.gif)
圖片來源： https://www.codesdope.com

**流程**

```js
const arr = [2, 4, 1, 5, 3]
```

```txt
1. 不變： [2, 4, 1, 3]  已排序：[5]
2. 不變： [2, 1, 3]     已排序：[4, 5]
3. 不變： [2, 1]        已排序：[3, 4, 5]
4. 不變： [1]           已排序：[2, 3, 4, 5]
4. 不變： []            已排序：[1, 2, 3, 4, 5]
```

## 實作

```js
function BubbleSort(arr) {
  let steps = 0
  const n = arr.length

  // i 用來計算已經排序過的元素數量
  for (let i = 0; i < n; i++) {
    // j 和 j + 1 用來表示當前被比較的元素
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
      steps++
    }
    console.log(`It takes ${steps} steps to complete.`)
  }

  return arr
}
```

流程：

```txt
# 第一次外層迴圈 i = 0
======================================= j = 0; j++
arr[j], arr[j + 1]       2, 4
after sort              [2, 4, 1, 5, 3]

======================================= j = 1; j++
arr[j], arr[j + 1]          4, 1(swap)
after sort              [2, 1, 4, 5, 3]

======================================= j = 2; j++
arr[j], arr[j + 1]             4, 5
after sort              [2, 1, 4, 5, 3]

======================================= j = 3; j++
arr[j], arr[j + 1]                5, 3(swap)
after sort              [2, 1, 4, 3, 5]

======================================= j = 4; j 此時已不小於 n - 1 - i (5 - 1 - 0)


# 第二次外層迴圈 i = 1
======================================= j = 0; j++
arr[j], arr[j + 1]       2, 1(swap)
after sort              [1, 2, 4, 3, 5]

======================================= j = 1; j++
arr[j], arr[j + 1]          2, 4
after sort              [1, 2, 4, 3, 5]

======================================= j = 2; j++
arr[j], arr[j + 1]             4, 3(swap)
after sort              [1, 2, 3, 4, 5]

=======================================  j = 3; j 此時已不小於 n - 1 - i (5 - 1 - 1)


# 第三次外層迴圈 i = 2
======================================= j = 0; j++
arr[j], arr[j + 1]       1, 2
after sort              [1, 2, 3, 4, 5]

======================================= j = 1; j++
arr[j], arr[j + 1]          2, 3
after sort              [1, 2, 3, 4, 5]

======================================= j = 2; j 此時已不小於 n - 1 - i (5 - 1 - 2)

```

## Bubble Sort 的 Big O Notation

在 input 陣列長度為 5 時，總共 10 步完成排序。

```js
bubbleSort(arr) // It takes 10 steps to complete.
```

但是別忘了，實作邏輯使用了巢狀迴圈，這個時間複雜度可是 `O(n^2)`。
如果 input 是長度 100 的陣列，看看結果是什麼：

```js
const test = []
for (i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100))
}
bubbleSort(test) // It takes 2419 steps to complete.
```

總共花費了 2419 步，才完成這個排序，顯然有改進空間。

Worst Case Performance: `O(n^2)`

Best Case Performance: `O(n)`

Average Case Performance: `O(n^2)`

## 改良

氣泡排序法的平均跟最壞時間複雜度都是 `O(n^2)`，但在 best case 的情況下，也就是 input 陣列已經是排序好的情況時，時間複雜度應該要是 `O(n)`，因為元素不會做任何的交換。

如果要做到這點，以上的程式碼還是需要做個優化，否則，即時不需要交換，他還是會將回圈跑完，每個元素都檢查一次。

可以加上一個 flag 標注內圈有沒有交換的情形發生，如果沒有，就代表陣列已經排序好了，就可以直接跳掉。

```js
function BubbleSort(arr) {
  const n = arr.length
  let swapped = true

  for (let i = 0; i < n && swapped; i++) {
    swapped = false
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}
```

## Reference

[資料結構與演算法 (JavaScript) - 41. Bubble Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25143626#questions)

[資料結構與演算法 (JavaScript) - 42. Understanding The Pseudo Code](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25152970#questions)

[一起用 JavaScript 來複習經典排序法吧！](https://blog.huli.tw/2017/08/27/review-the-classical-sort-algorithm-with-javascript/)
