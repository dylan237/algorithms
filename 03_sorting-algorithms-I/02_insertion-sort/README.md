## 什麼是 Insertion Sort?

插入排序也是一種相對基礎的排序方式，效能上來說，也不是特別優良，但是比氣泡排序好一點點。
值得注意的是，雖然插入排序法效能上來說優於氣泡排序一些，但在 Big O Notation 上，這兩種演算法同樣都還是 `O(n^2)`

## Insertion Sort 的概念

> 插入排序法簡單來說就像是在玩大老二時，你排序手牌的方式。

不斷把撲克牌插入到適合的位置，不過你玩牌的時候可能一次插入好幾張牌，而插入排序法是一次插入一張牌。

**Insertion Sort 運作方式**
![](https://miro.medium.com/max/1102/1*qc-KD7DII1K097jnvOWqsg.gif)
圖片來源： https://miro.medium.com

## 實作

```js
unction insertionSort(arr) {
  // 假設第一個元素已經排好，所以從 1 開始跑
	for (let i = 1; i < arr.length; i++) {

    // 要插入的元素
		const key = arr[i]

    // position 表示當前跟 key 比較的元素位置
		let position = i - 1

    // 如果 position 元素比 key 還要大，代表還沒有找到合適位置
		while (position >= 0 && key < arr[position]) {
      // 不斷把不合適位置的索引往前移動一位，空出空間
			arr[position + 1] = arr[position]
			position--
		}

    // 直到找到 position 元素比 key 小的位置，插入 key
		arr[position + 1] = key
	}
	console.log(arr)
}

insertionSort([1, 3, 5, 2, 4])
```

**流程**

```txt
input [1, 3, 5, 2, 4]

# 第一次迴圈 i = 1
======================================= key = arr[i] = 3
 p
 |
[1, 3, 5, 2, 4]  --> ❌key > 1; arr[p + 1] = key   --> [1, 3, 5, 2, 4]

# 第二次迴圈 i = 2
======================================= key = arr[i] = 5
    p
    |
[1, 3, 5, 2, 4]  --> ❌key > 3; arr[p + 1] = key   --> [1, 3, 5, 2, 4]

# 第三次迴圈 i = 3
======================================= key = arr[i] = 2
       p
       |
[1, 3, 5, 2, 4]  --> ✅key < 5; arr[p + 1] = p     --> [1, 3, 5, 5, 4] --> p--

    p
    |
[1, 3, 5, 5, 4]  --> ✅key < 3; arr[p + 1] = p     --> [1, 3, 3, 5, 4] --> p--

 p
 |
[1, 3, 3, 5, 4]  --> ❌key > 1; arr[p + 1] = key   --> [1, 2, 3, 5, 4] --> p--

# 第四次迴圈 i = 4
======================================= key = arr[i] = 4
          p
          |
[1, 2, 3, 5, 4]  --> ✅key < 5; arr[p + 1] = p     --> [1, 2, 3, 5, 5] --> p--
       p
       |
[1, 2, 3, 5, 5]  --> ❌key > 3; arr[p + 1] = key   --> [1, 2, 3, 4, 5] --> p--

...

```

## Insertion Sort 的 Big O Notation

Worst Case Performance: `O(n^2)`

Best Case Performance: `O(n)`

Average Case Performance: `O(n^2)`

## Reference

[資料結構與演算法 (JavaScript) - 45. Insertion Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25202654#questions)

[資料結構與演算法 (JavaScript) - 46. Pseudo code of Insertion Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25202676#questions)

[資料結構與演算法 (JavaScript) - 47. Implement Insertion Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25202690#questions)

[資料結構與演算法 (JavaScript) - 48. Big O of Insertion Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25202696#questions)

[一起用 JavaScript 來複習經典排序法吧！](https://blog.huli.tw/2017/08/27/review-the-classical-sort-algorithm-with-javascript/)
