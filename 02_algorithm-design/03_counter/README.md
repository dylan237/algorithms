## 什麼是 Counter?

Counter 是一種演算法優化技巧，在做演算法設計時很常使用。這個技巧會透過一個 「Counter Object」來有效的降低演算法的時間複雜度。 
Counter 這個詞不是一個正式名稱，他在很多地方可能不同的名稱，但是 idea 都是一樣的。

## Counter 的概念

Counter 可以想像成是一個記分板，可以把複雜的運算邏輯，透過簡單的記數方式實現。

## 例子 - Intersection

**目標： 實作一個函數，接收兩個陣列，並回傳兩個陣列的交集(intersection)**

```js
intersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]) // excepted output: [4, 5]
```

**1. 實作：**
最直覺的方式可能會寫出一個雙層巢狀迴圈，用兩個陣列互相做比較，把重複的直找出來。

```js
function intersection(arr1, arr2) {
  const intersectionArr = []

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersectionArr.push(arr1[i])
      }
    }
  }

  console.log(`intersection: ${intersectionArr}`)
}
```

這麼做的確可以達成我們的目的，但是使用巢狀迴圈的時間複雜度為 `O(n^2)`，不是一個很理想的情況。

**2. 使用 Counter 優化：**
換個方式思考，如果這個問題在現實中你會怎麼解決呢？
想像 arr1 和 arr2 是兩個箱子，每次從箱子取出一個數字，就在黑板(Counter)上做正字標記，記住該數字出現的次數，當全部的箱子都開完了，看看黑板上超過一筆畫以上的物品，他就是重複出現(交集) 的數字了。

現在我們使用程式來實作這個邏輯：

```js
function intersection(arr1, arr2) {
  const unionArr = [...arr1, ...arr2]
  const intersectionArr = []
  const counter = unionArr.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1
    } else {
      acc[cur] += 1
    }
    return acc
  }, {})
  for (const property in counter) {
    if (counter[property] > 1) {
      intersectionArr.push(property)
    }
  }
  console.log(counter)
  console.log(`intersection: ${intersectionArr}`)
}
```

counter 就是紀錄物品數量的黑板，而 value 超過 1 的物品，就是重複的物品。

```js
console.log(counter)
/*
{
    "1": 1,
    "2": 1,
    "3": 1,
    "4": 2,
    "5": 2,
    "6": 1,
    "7": 1,
    "8": 1
} 
*/
```

使用 counter 優化後，時間複雜度只剩下 `O(n)`，避免了使用巢狀迴圈，也達成我們的目的了

## Coding Practice

現在來用剛學到的概念來試著解題吧。

### Frequency Problem

寫一個函數 `sameFrequency`，接收兩個字串，並驗證他們是否由同一個批字母所組成，順序不需考慮

```js
sameFrequency('abba', 'bbaa') // true
sameFrequency('aba', 'bba') // false
sameFrequency('abab', 'aba') // false
```

> [Frequency Problem 解答](https://github.com/dylan237/algorithms-data-structures-notes/blob/master/02_algorithm-design/03_counter/1_frequency-problem.js)

## Reference

[資料結構與演算法 (JavaScript) - 25. Intersection Problem](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25117242#overview)

[資料結構與演算法 (JavaScript) - 26. Counter](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25117228#questions/15273382)

[資料結構與演算法 (JavaScript) - 27. Frequency Problem](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25117232#overview)
