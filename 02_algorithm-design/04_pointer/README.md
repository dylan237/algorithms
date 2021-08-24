## 什麼是 Pointer?

Pointer 和 Counter 一樣都是一種演算法優化技巧，在做演算法設計時很常使用。在某些情況可以將你的演算法時間複雜度從 O(n^2) 優化成 O(n)。
另外 Pointer 這個詞不是一個正式名稱，他在很多地方可能不同的名稱，但是 idea 都是一樣的。

## Pointer 的概念

Pointer 的概念和 binary search 有點像，透過不斷縮小範圍的方式去找到目標值

## 例子 - Average Pair

**目標： 實作一個函數，第一個參數接收一個 sorted array of numbers；第二個參數接收一個 integer。回傳陣列內任兩個數相加除以 2 等於第二參數的所有 pairs**

```js
averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5)
// excepted output: [[-11, 14], [0, 3], [1, 2]]
```

**1. 實作：**

使用排列組合公式中的「組合」公式， `C(n,m)`，計算從 n 個不同元素中，取出 m 個為一組的組合，總共有幾種。

```
(n * n - 1) / m
```

> 如果高中數學還給老師了，請左轉複習[排列組合公式](https://www.youtube.com/watch?v=06RdNvudMp0)

定義函數

```js
const C = (n, m) => (n * n - 1) / m
```

套用公式，此範例 input 陣列長度為 9，使用 `C(9, 2)` 進行計算，得出共有 36 種排列組合。

```js
const allPairs = C(9, 2) // 36#
```

所有的組合，共 36 對如下

```
[-11, 0], [-11, 1], [-11, 2], [-11, 3], [-11, 9], [-11, 14], [-11, 17], [-11, 21]
[0, 1], [0, 2], [0, 3], [0, 9], [0, 14], [0, 17], [0, 21]
[1, 2], [1, 3] ,[1, 9] ,[1, 14], [1, 17], [1, 21], [2, 3], [2, 9], [2, 14], [2, 17], [2, 21]
[3, 9], [3, 14], [3, 17], [3, 21]
[9, 14], [9, 17], [9, 21]
[14, 17], [14, 21]
[17, 21]
```

使用巢狀迴圈，將所有配對可能都進行計算，找出符合預期的 pairs

```js
function averagePair(arr, avg) {
  const pairs = []
  let count = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++
      if ((arr[i] + arr[j]) / 2 === avg) {
        pairs.push([arr[i], arr[j]])
      }
    }
  }
  console.log(`總共有 ${count} 個組合`)
  console.log(`符合條件的組合有 ${pairs}`)
  return pairs
}
/* 
  總共有 36 個組合
  符合條件的組合有 [[-11, 14], [0, 3], [1, 2]]
*/
```

這樣的演算法直觀好理解，但是 Big O 為 `O(n^2)`，是一個包含巢狀迴圈的方案，有優化空間。

**2. 使用 Pointer 優化：**

這題需要善用以排序的特性，透過指定兩個指標 (Pointer) ，分別是 left 及 right，從陣列中最大與最小開始進行配對，left 初始為 0，即指向陣列中最小的數字，right 指向陣列最後一個元素，即最大數字。
從這兩個元素開始進行平均計算，若相加除以 2 比 average 還大，則代表數字過大，須將 right 指標往前遞減一個索引，使得新的數字更小；反之則是 left 指標遞增一個索引，使數字更大。
透過不斷更改指標，計算出來的數字會不斷接近 average 參數。

```js
function averagePair(arr, avg) {
  let left = 0
  let right = arr.length - 1
  const pairs = []

  while (left < right) {
    const result = (arr[left] + arr[right]) / 2
    if (result > avg) {
      right--
    } else if (result < avg) {
      left++
    } else {
      pairs.push([arr[left], arr[right]])
      right--
      left++
    }
  }
  return pairs
}
```

經過 Pointer 的改進，Big O 進步為 O(n)，是一個很不錯的優化。

流程圖：

```
============ STEP 1 ==============
 left                       right
  |                           |
[-11, 0, 1, 2, 3, 9, 14, 17, 21]    -->   (-11 + 21) / 2 = 5
                                          5 != 1.5  ❌ TOO BIG --> right--
============ STEP 2 ==============
 left                   right
  |                       |
[-11, 0, 1, 2, 3, 9, 14, 17, 21]    -->   (-11 + 17) / 2 = 3
                                          3 != 1.5  ❌ TOO BIG --> right--
============ STEP 3 ==============
 left               right
  |                   |
[-11, 0, 1, 2, 3, 9, 14, 17, 21]    -->   (-11 + 14) / 2 = 1.5
                                          1.5 == 1.5  ✅ Insert pair to result array && right-- && left++
============ STEP 4 ==============
     left       right
      |           |
[-11, 0, 1, 2, 3, 9, 14, 17, 21]    -->   (0 + 9) / 2 = 4.5
                                          4.5 !== 1.5  ❌ TOO BIG --> right--
============ STEP 5 ==============
     left    right
      |        |
[-11, 0, 1, 2, 3, 9, 14, 17, 21]    -->   (0 + 3) / 2 = 1.5 
                                          1.5 == 1.5  ✅ Insert pair to result array && right-- && left++
============ STEP 6 ==============
      left  right
         |  |
[-11, 0, 1, 2, 3, 9, 14, 17, 21]    -->   (1 + 2) / 2 = 1.5
                                          1.5 == 1.5  ✅ Insert pair to result array && right-- && left++
```

## Coding Practice

現在來用剛學到的概念來試著解題吧。

### 1. Palindrome

Palindrome 的意思是一個單字倒過來，和原來的樣子還是一樣。
實現一個函數，回傳傳入的字串是否為 Palindrome

```js
palindrome('tacocat') // true
palindrome('foobar') // false
```

> [Palindrome 解答](https://github.com/dylan237/algorithms-data-structures-notes/blob/master/02_algorithm-design/04_pointer/1_palindrome.js)

### 1. Subsequence Problem

Subsequence 字串是由一個原始字串，刪除某些字母後的單字，且需與原始字串內所有字母間的相對位置一致。
實現一個函數，接受兩個參數，並判斷他們是否為 subsequence 的關係。

```js
isSubsequence('Hello', 'Hello World') // true
isSubsequence('book', 'brooklyn') // true
isSubsequence('abc', 'acb') // false (order matters)
```

> [Subsequence Problem 解答](https://github.com/dylan237/algorithms-data-structures-notes/blob/master/02_algorithm-design/04_pointer/2_subsequence.js)

## Reference

[資料結構與演算法 (JavaScript) - 28. Average Pair](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25117256#overview)

[資料結構與演算法 (JavaScript) - 29. Pointer](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25117718#overview)

[資料結構與演算法 (JavaScript) - 30. Palindrome](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25117728#overview)

[資料結構與演算法 (JavaScript) - 31. Subsequence Problem](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25117736#overview)
