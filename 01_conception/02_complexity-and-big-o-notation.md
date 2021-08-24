# 時間複雜度和大 O 符號 (Time Complexity & Big O Notation)

> 章節部分內容取自[App Works School](https://medium.com/appworks-school/tagged/algorithms) 的程式麻瓜的程式知識課系列，非 100%原創內容。

[上一節](https://github.com/dylan237/algorithms-data-structures-notes/blob/master/01_conception/01_what_is_algorithm.md)的例子中，了解了好與壞的演算法之間的差異是這麼巨大了，但現在有一個問題：
透過執行時間來評估一段程式的執行時間(runtime)，其實是不切實際的，因為即使使用同一台電腦跑同一個程式，每次的 runtime 不一定會一樣，另外執行效率也會因為硬體差異導致不同。
因此這個結果頂多只能當作一個參考，無法當做一個客觀衡量演算法優劣的指標。

## 複雜度 Complexity

比較標準的方式去判斷演算法優劣，是透過`複雜度`來評估，複雜度又分為兩種，`時間複雜度 Time Complexity` 與 `空間複雜度 Space Complexity`。前者評估為程式執行的時間；後者評估程式所佔用的記憶體大小。

> 接下來的內容主要會把重點放在`時間複雜度`的部分。

## Big O Notation

時間複雜度是用來評斷演算法執行快慢的指標，而實務上通常用 Big O Notation 來描述。

> 定義：Big O Notation 是一種工具，用來描述函數 f(n)，在 input 也就是 n 趨近於無窮大時，該函數的成長趨勢。

### 看電影跟 Big O Notation 的關係

假設你今天心血來潮，想要重看經典電影名著《鐵達尼號》。你想到兩個方法：

1. 走到離你家最近的租片店，租片來回需要花 25 分鐘。
2. 從網路上下載檔案，一部需要花 20 分鐘。

兩者花的時間差距不大，但你可能會先選擇從網路下載。
現在，讓我們重新假設。你今天心血來潮，不只想要看《鐵達尼號》，也想要順便複習《哈利波特》全集＋《魔戒》三部曲。此時，去租片店拿到這一拖拉庫的電影還是只需要花走路的時間 25 分鐘，但從網路下載，你卻需要等電腦下載 4 個小時，這時，你可能不會選擇從網路下載。

![](https://miro.medium.com/max/1400/1*LiDirYGz4qCHDflA_j0zsA.jpeg)

在上面的例子中，如果選擇去租片店取得電影，所要取得的時間不受想要看的電影部數影響。也就是你的腦袋不管輸入幾個電影需求（Input），最後得到電影檔案（Output）的時間都不會因此增加。這樣的特性，用所謂 Big O Notation 表示這個租片演算法，我們會把演算法的時間複雜度記為 O(1)。
而如果選擇從網路上下載電影，很明顯的你輸入 n 個電影需求，拿到電影的時間就會隨著 n 成倍數成長。此時，我們會用 Big O Notation 記為 O(n)。
看到這裡，我們可以對時間複雜度有一個最基礎的認知，也就是：

> Big O Notation 是用來描述一個演算法在輸入 n 個東西時，總執行時間與 n 的關係。

### 計算 Big O 的三大原則

#### 1. Constants doesn't matter

假如有個演算法的時間複雜度表示為： `f(n) = 3n`
在這個指標中，n 是 input，代表著變數 (variable)，而 3 代表的則是常數 (constant)，永遠固定為 3。

而 Big O 有個大原則：它只在乎 n 為無窮大時的情況，相較於 n 的無窮大，常數對於演算法的的影響相對小，所以可以直接忽略不考慮。
將常數 3 去除後時間複雜度為 `f(n) = n`，以 Big O 來描述則記作 `O(n)`

**實例：**

```js
function foo(n) {
  for (let i = 0; i < n * 3; i++) {
    // ...
  }
}
```

#### 2. Small terms doesn't matter

假如有個演算法的時間複雜度表示為： `f(n) = 3n² + 6n + 4`
Big O Notation 中，若 n 被計算多次，它只取其中最大值作為複雜度指標，其他都須去除。
去除後的時間複雜度為 `f(n) = 3n² + 4`，若再套用第一個規則，不考慮常數，又可以記作 `f(n) = n²`，使用 Big O 來描述，記作 `O(n²)`

**實例：**

```js
function foo(n) {
  /* 3n² */
  for (let i = 0; i < n * 3; i++) {
    for (let j = 0; j < n; j++) {
      // ...
    }
  }
  /* 6n */
  for (let i = 0; i < n * 6; i++) {
    // ...
  }
  /* 4 */
  console.log(1)
  console.log(2)
  console.log(3)
  console.log(4)
}
```

#### 3. Logarithm Base doesn't matter.

假如有個演算法用時間複雜度表示為 `f(n) = log₂ n`
Big O Notation 中，log 的底數將忽略不計，去除底數後為 `f(n) = log n`，用 Big O 來描述，記作 `O(log n)`

**補充： 忘記對數(log) 是什麼了嗎？**

```txt
用指數來表示 「2 的 n次方等於 8」
2ⁿ = 8

用對數(log) 來描述
log₂ 8 = n

n = 3 #
```

## Reference

[初學者學演算法｜談什麼是演算法和時間複雜度](https://medium.com/appworks-school/%E5%88%9D%E5%AD%B8%E8%80%85%E5%AD%B8%E6%BC%94%E7%AE%97%E6%B3%95-%E8%AB%87%E4%BB%80%E9%BA%BC%E6%98%AF%E6%BC%94%E7%AE%97%E6%B3%95%E5%92%8C%E6%99%82%E9%96%93%E8%A4%87%E9%9B%9C%E5%BA%A6-b1f6908e4b80)

[[資料結構] 演算法評估與資料型別](http://notepad.yehyeh.net/Content/DS/CH01/3.php#section1)
