## 常見的時間複雜度比較

> 章節部分內容取自[App Works School](https://medium.com/appworks-school/tagged/algorithms) 的程式麻瓜的程式知識課系列，非 100%原創內容。

通常，我們會希望一個演算法至少能比 O(n²) 還要快，如果能到 O(n)、O(1) 甚至是 O(log n) 的話是最理想的情況。

**常見的演算法時間複雜度：**

1. `O(1)`：陣列讀取
2. `O(n)`：簡易搜尋
3. `O(log n)`：二分搜尋
4. `O(nlogn)`：合併排序
5. `O(n²)`：選擇排序
6. `O(2ⁿ)`：費波那契數列

![big-o cheat sheet](https://miro.medium.com/max/1400/1*5ZLci3SuR0zM_QlZOADv8Q.jpeg)
圖片來源： https://jarednielsen.com

### O(1)：陣列讀取

時間複雜度為 O(1) 的演算法，代表著不管你輸入多少個東西，程式都會在同一個時間跑完。最常見的例子就是讀取一個陣列中特定索引值的元素。

```js
const arr = [1, 2, 3, 4, 5]
arr[0] // O(1)
```

### O(n)：簡易搜尋

參考 [2-1. 簡易搜尋 Linear Search](https://github.com/dylan237/algorithms-data-structures-notes/blob/master/02_algorithm-design/01_linear-search/fundamental.md)

**補充： 在 JS 中 Array Insertion (插入元素) 的時間複雜度**

1. `push`: 時間複雜度為 `O(1)`，只需要在整條陣列的記憶體位置的最後面插入元素，其餘元素皆不會被影響。
2. `unshift`: unshift 在陣列的第一個位置插入元素，這也意味著第一個位置後的所有元素的索引都會發生改變，每個資料的記憶體位置都會被指向到新的陣列索引(index)，時間複雜度為 `O(n)`

### O(log n)：二分搜尋

參考 [2-2. 二分搜尋 Binary Search](https://github.com/dylan237/algorithms-data-structures-notes/blob/master/02_algorithm-design/02_binary-search/fundamental.md)

### O(n²)：選擇排序法、插入排序法

## Reference

[初學者學演算法｜談什麼是演算法和時間複雜度](https://medium.com/appworks-school/%E5%88%9D%E5%AD%B8%E8%80%85%E5%AD%B8%E6%BC%94%E7%AE%97%E6%B3%95-%E8%AB%87%E4%BB%80%E9%BA%BC%E6%98%AF%E6%BC%94%E7%AE%97%E6%B3%95%E5%92%8C%E6%99%82%E9%96%93%E8%A4%87%E9%9B%9C%E5%BA%A6-b1f6908e4b80)

[[資料結構] 演算法評估與資料型別](http://notepad.yehyeh.net/Content/DS/CH01/3.php#section1)
