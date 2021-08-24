## Merge Sort 的概念

- 合併排序的原則相當簡單，他善用一個事實：當兩個已被排序的陣列在合併時，時間複雜度為 `O(n)`。
- 合併排序是 `Divide and Conquer` 相當經典的例子。
- 由於不斷分解 Array 並儲存至記憶體，因此空間複雜度相對稍高。

### Divide and Conquer

就字面上來看 Divide 有分開的意思，Conquer 是征服的意思，中文有個有意思的翻譯 `分而治之`，他所傳達的概念是將一個大的問題，拆分成多個小問題，再一一解決。
而 Divide and Conquer 是在演算法中相當實用的技巧，通常與遞迴 (Recursion) 一起使用。

## Merge Sort 運作方式

![](https://miro.medium.com/max/1400/1*61Mf0zjVfd1s3_SzUNGxPA.png)
圖片來源： https://oldmo860617.medium.com/

基本上分為兩個步驟：分割 (divde) 與整合 (conquer) 。首先利用遞迴把原先未排序的陣列平均分割成兩半，直到各邊都只剩下一個元素（上圖紫色方塊），接著排序後再一一整合起來，最後會合併成一個排序後的陣列（上圖綠色區塊）。

**分割**

1. 把大陣列分一半成為兩個小陣列
2. 把從上一步驟切好的兩個小陣列再各自分一半
3. 重複步驟 2 直到每個小陣列都只剩一個元素

**整合**

1. 排序兩個只剩一個元素的小陣列並將其合併
2. 把上一步驟排序好的小陣列合併並排序成一個陣列
3. 重複步驟二直到所有小陣列都合併成一個大陣列

## 實作

```js
function mergeSort(arr) {
  /* divide */
  if (arr.length === 1) return arr

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arr.length)
  /* divide */

  return merge(mergeSort(left), mergeSort(right))
}

/* conquer */
function merge(arr1, arr2) {
  let i = 0
  let j = 0
  const result = []

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

mergeSort([9, 3, 2, 8, 5, 1, 7, 4, 6])
```

## 解析

mergeSort 函數中進行 divide 的部分(上圖紫色區塊)，將傳入的陣列由中間一分為二，拆成 left 與 right 兩個較小的陣列，接著將兩個小陣列透過遞迴的方式再次傳入 mergeSort 函數，再次進行分割，直到陣列被分割成長度為 1 的陣列時，終止遞迴。
當一個大陣列，被分割成多個長度為 1 的小陣列時，每個長度為 1 的陣列在意義上來說，就是一個 `sorted array` 了。

接著，我們該如何把這些長度較小的 sorted array，合併成一個大的 sorted array 呢（上圖綠色區塊）？ 這時會用到前面提過的 [Pointer](https://github.com/dylan237/algorithms-data-structures-notes/blob/master/02_algorithm-design/04_pointer/README.md) 技巧。
在 merge 函數中，接收兩個被分割的小陣列，我們設定兩個 pointer `i` 與 `j`，分別指向兩個陣列的第一個元素索引，並由此索引開始對兩個陣列內元素進行大小比較，將較小的元素放 result 陣列中，同時將較小方的 pointer 往後移動(+1)，接著繼續進行大小比較，直到某方的 pointer 指向到對應陣列的末端，完成排序。
而透過 merge 函數進行排序，時間複雜度為 `O(n)`，而 n 的數即兩個傳入陣列的長度相加。

## Merge Sort 的 Big O Notation

Worst Case Performance: `O(n logn)`

Best Case Performance: `O(n logn)`

Average Case Performance: `O(n logn)`

## Reference

[JS 學資料結構與演算法 (排序篇) — 合併排序法 Merge Sort](https://oldmo860617.medium.com/js-%E5%AD%B8%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95-2-%E5%90%88%E4%BD%B5%E6%8E%92%E5%BA%8F%E6%B3%95-merge-sort-cf1a8457c9e0)

[資料結構與演算法 (JavaScript) - 53. Merge Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25250534#questions)

[資料結構與演算法 (JavaScript) - 53. Implement Merge Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25250534#questions)

[資料結構與演算法 (JavaScript) - 55. Big O of Merge Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25270496#questions)
