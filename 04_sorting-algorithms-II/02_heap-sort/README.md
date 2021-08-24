## Heap Sort 的概念

Heap Sort 演算法使用了 Max Heap 資料結構作為基礎，而 Max Heap 是 Binary Tree 的其中一種型態，因此在理解 Heap Sort 之前，需要先對 Tree 有初步的認識。

## Tree

- 在電腦科學中，樹這種資料結構是一種被廣泛使用的抽象資料結構(abstract data type) 型態，他被用來模擬一種分層的資料型態。
- 樹也可以被理解為一種沒有循環的 `Graph`(Acyclic graph)，Graph 本身也是一種資料結構，後面的章節會再提到。

關於 Tree 常見的名詞

- `Root` - 樹的第一個元素，也就是第一層唯一的一個元素，每一個樹狀結構都只會有也必須有一個 Root
- `Leaf Node` - 樹中最後一層的所有元素，都可以稱為 Lead Nodes
- `Sub-tree` - 一個完整的樹，會包含很多的 Sub-tree，見下圖示意
- `Parent Node` - Sub-tree 中第一層的元素，可以理解為 Sub-tree 中的 Root
- `Child Node` - Sub-tree 中 Parent Node 底下的所有元素，都可以稱為 Child Nodes
- `Siblings` - 兩個具有同個 Parent Node，且同層的的 Nodes 之間稱為 Siblings

![](https://web.ntnu.edu.tw/~algo/BinaryTree1.png)
圖片來源：https://web.ntnu.edu.tw/

## Binary Tree

廣義的樹(Tree) 對於樹上的 node 之 child 數目沒有限制，因此，每個 node 可以有多個 child。

![](https://github.com/alrightchiu/SecondRound/blob/master/content/Algorithms%20and%20Data%20Structures/Tree%20series/BinaryTree_fig/Intro/f1.png?raw=true)

圖片來源：https://github.com/alrightchiu

若限制樹中的每個 node 最多只能有兩個 child nodes，此即稱為 `Binary Tree`。
Binary Tree 中的每個節點可以有 `left child` 和 `right child`，即每個節點可以有零個、一個、兩個 child，最多不超過兩個。

![](https://github.com/alrightchiu/SecondRound/blob/master/content/Algorithms%20and%20Data%20Structures/Tree%20series/BinaryTree_fig/Intro/f2.png?raw=true)

圖片來源：https://github.com/alrightchiu

### 兩種常見的 Binary Tree 種類

**Full Binary Tree (FBT)**
也被稱為 `Perfect Binary Tree`。在 FBT 中，除了 Leaf Nodes 以外，每個節點都`必須`有兩個 children，且所有 leaf nodes 具有相同的深度 ( level/height )。

由以上性質能夠推論出：

- 若一棵 Full Binary Tree 的 leaf node 之 level 為 n，整棵樹共有 `2n−1` 個 node。
  例如，若 leaf node 的 level 為 4，整棵樹共會有 15 個 nodes。

![](https://github.com/alrightchiu/SecondRound/blob/master/content/Algorithms%20and%20Data%20Structures/Tree%20series/BinaryTree_fig/Intro/f3.png?raw=true)

圖片來源：https://github.com/alrightchiu

**Complete Binary Tree (CBT)**

- 一棵樹的 node 按照 Full Binary Tree 的次序排列(由上至下，由左至右)，但 leaf node 的 深度不同。

下圖樹共有 10 個 node，且這十個 node 正好填滿 Full Binary Tree 的前十個位置，則此樹為 Complete Binary Tree。

![](https://github.com/alrightchiu/SecondRound/blob/master/content/Algorithms%20and%20Data%20Structures/Tree%20series/BinaryTree_fig/Intro/f4.png?raw=true)

圖片來源：https://github.com/alrightchiu

樹共有 11 個 node，但是第 11 個 node(K)應該要是第 5 個 node(E)的 child，因此，此樹並非 Complete Binary Tree。

![](https://github.com/alrightchiu/SecondRound/blob/master/content/Algorithms%20and%20Data%20Structures/Tree%20series/BinaryTree_fig/Intro/f5.png?raw=true)

圖片來源：https://github.com/alrightchiu

**FBT 與 CBT 節點對應關係**
由上述結果可以推論出，在 FBT 與 CBT 中，每個 parent node 與其 children 有以下關係：

- 第 i 個 node 的 left child 之 index 為 `2i`；
- 第 i 個 node 的 right child 之 index 為 `2i + 1`；
- 第 i 個 node 的 parent 之 index 為 `i/2`。

**練習**

將陣列以 Complete Binary Tree 表示：

```js
const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
```

![](https://github.com/alrightchiu/SecondRound/blob/master/content/Algorithms%20and%20Data%20Structures/Tree%20series/BinaryTree_fig/Intro/f4.png?raw=true)

圖片來源：https://github.com/alrightchiu

尋找 B 的 `left node` 和 `right node`

```js
const positionOfB = 2
const left = positionOfB * 2 // 4
const right = left + 1 // 5
console.log('left child of B is--', arr[left - 1]) // 'D'
console.log('right child of B is--', arr[right - 1]) // 'E'
```

尋找 I 的 `parent node`

```js
const positionOfI = 9
const positionOfParent = Math.floor(9 / 2)
console.log('parent of I is--', arr[positionOfParent - 1]) // 'D'
```

**補充：計算樹的深度(layer)**
假設有一個陣列共有 1024 個元素，將他以 Tree 的形式呈現時，深度會有幾層呢？

```
        4
      /    \
     3       7
   /  \     /  \
  1    2    5   6
 / \  / \  / \  / \
0  5  7 8  1 2  6  8
```

觀察這個 Tree 可以得到以下結果:

```
layer = 1, node = 1
layer = 2, node = 3
layer = 3, node = 7
layer = 4, node = 15
-------
layer = k, node = 2^k - 1
```

轉換一個寫法，將 -1 去掉，:

```
layer = k, n = 2^k
---> k = log₂n
```

套入公式，計算 1024 個 nodes 的樹對應的深度會是 10

```
k = log₂1024 = 10
```

## Max Heap

對於 Tree 有基本的認識後，來講講 Max Heap 吧。

**定義：**
Max Heap 必須是 `CBT`，但附帶另一個條件，Max Heap 中的所有 Sub-trees 的 parent node 的值，必須大於他的所有 child nodes，如下圖。

> 補充：還有另一種相對於 Max Heap 的結構叫做 Min Heap，可以由下圖觀察他與 Max Heap 的差異。

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/MinHeapAndMaxHeap.png)

圖片來源： https://media.geeksforgeeks.org

## 將 Complete Binary Tree 轉換成 Max Heap

Heap Sort 演算法是建立在 Max Heap 資料結構下，在正式開始前，我們需要先花點時間了解 Max Heap 是如何被製作出來的。

**轉換前後示意圖**

```
Input (CBT) :          4             Output (Max Heap) :       7
                     /   \                                   /   \
                    2     6                                 3     6
                   /  \   / \                              /  \   / \
                  1   3  5   7                            1   2  5   4
```

**CBT 轉換成 Max Heap 視覺化流程**

1. 從 Tree 的 middle node 開始檢查，比較該 node 與其 left child 和 right child 大小，將 value 最大的與 middle node 進行交換(swap)。

> Binary Tree 的 middle node 永遠會是樹的倒數第二層的最後一個 node，在 JS 中可以使用 `Math.floor(tree.length / 2)` 找到 middle index。

```
      4                                4
    /   \                 swap       /   \
   2     6<- middle　　　 ----->     2    7<
  / \   / \                        / \   / \
 1  3  5   7                      1  3  5   6<
```

2. 接著檢查 middle node 的前一個 node，重複執行第一步驗證

```
      4                       4
    /   \        swap       /   \
  >2     7 　　　----->    >3     7
  / \   / \               / \   / \
 1   3  5  6            1  >2  5   6
```

3. 再檢查前一個 node

```
     >4                       7<
    /   \        swap       /   \
   3     7 　　　----->     3     4<
  / \   / \               / \   / \
 1  2  5   6             1   2  5  6
```

4. 4 與 7 交換後，右下角的 `sub-tree [4, 5, 6]` 的 root 已經不是最大的值了，這點需要特別注意，任何 node 在與 root 進行 swap 後，和 root 交換的 node 必須要再重新進行一次最大值檢查，確保所有 sub-tree 的 root 是最大的。

```
      7                        7
    /   \         swap       /   \
   3     4<　 　　----->     3     6<
  / \   / \                / \   / \
 1  2  5   6              1   2  5  4<

```

**實作 buildMaxHeap 函數**

現在已經了解 CBT 轉換成 Max Heap 的流程了，試著透過剛剛的理解來實作函數吧。

```javascript
function buildMaxHeap(arr) {
  function maxHeapify(root) {
    const heapSize = arr.length - 1
    const leftIdx = root * 2 + 1
    const rightIdx = root * 2 + 2
    let maxiumIdx

    if (leftIdx <= heapSize && arr[leftIdx] > arr[root]) {
      maxiumIdx = leftIdx
    } else {
      maxiumIdx = root
    }

    if (rightIdx <= heapSize && arr[rightIdx] > arr[maxiumIdx]) {
      maxiumIdx = rightIdx
    }

    if (maxiumIdx !== root) {
      // swapping
      ;[arr[root], arr[maxiumIdx]] = [arr[maxiumIdx], arr[root]]

      // 重新對交換後的 node 進行檢查
      maxHeapify(maxiumIdx)
    }
  }

  let middle = Math.floor(arr.length / 2) - 1
  while (middle >= 0) {
    maxHeapify(middle)
    middle--
  }

  return arr
}

buildMaxHeap([4, 2, 6, 1, 3, 5, 7]) // output: [7, 3, 6, 1, 2, 5, 4]
```

## 實作 Heap Sort

上面提到了 Heap Sort 是使用 Max Heap 作為基本條件運作的，現在我們已經有辦法將資料轉換成　 Max Heap，接著可以善用一個特性：`Max Heap 的 Root 是整棵樹的 nodes 中的最大的值`，藉此來實現排序。

**運作原理**

1. 將 Root 與 size 對應的索引進行 swapping (size 初始值為 Tree 的 length - 1)

   ```
   size = 6

         7<                        4
       /   \         swap        /   \
      3     6 　 　　----->      3     6
     / \   / \                 / \    / \
    1  2  5   4<              1   2   5  7

   ```

2. size - 1，在 swapping 後，當前最大值在 Tree 的最後一個位置(已排序)，未來的排序不需要再考慮到它

   ```
   size = 5

         4
       /   \
      3     6
     / \   / \
    1  2  5   7

   ```

3. swapping 後，當下的 Root 已經不是最大值，因此必須將資料重新進行 MaxHeapify ( 注意：此次轉換不可將超出 size 的元素考慮在內 )。再次取得新的 Max Heap 後，即可重複執行第一步驟，直到 size 歸零

   ```
   size = 5

         4<                         6                           6
       /   \         swap         /   \         swap          /   \
      3     6<       ---->       3     4<       ---->        3     5
     / \   / \                  / \    / \                  / \    / \
    1  2  5   X                1   2  5<  X                1   2  4   X

   ```

**完整程式碼**

```js
function heapSort(arr) {
  let heapSize = arr.length - 1

  function maxHeapify(root) {
    const leftIdx = root * 2 + 1
    const rightIdx = root * 2 + 2
    let maxiumIdx

    if (leftIdx <= heapSize && arr[leftIdx] > arr[root]) {
      maxiumIdx = leftIdx
    } else {
      maxiumIdx = root
    }

    if (rightIdx <= heapSize && arr[rightIdx] > arr[maxiumIdx]) {
      maxiumIdx = rightIdx
    }

    if (maxiumIdx !== root) {
      ;[arr[root], arr[maxiumIdx]] = [arr[maxiumIdx], arr[root]]
      maxHeapify(maxiumIdx)
    }
  }

  function buildMaxHeap() {
    let middle = Math.floor(heapSize / 2) - 1
    while (middle >= 0) {
      maxHeapify(middle)
      middle--
    }
  }

  buildMaxHeap()

  for (let i = arr.length - 1; i >= 0; i--) {
    // 流程1. root 與最後一個元素互換
    ;[arr[0], arr[i]] = [arr[i], arr[0]]
    // 流程2. 排除已排序的元素
    heapSize -= 1
    // 流程3. 重新整理 tree 成為 Max Heap
    maxHeapify(0)
  }
  return arr
}

heapSort([3, 1, 2, -1, 9, 10, 999, 13])
```

## Heap Sort 的 Big O Notation

Worst Case Performance: `O(n logn)`

Best Case Performance: `O(n logn)`

Average Case Performance: `O(n logn)`

## Reference

- [Binary Tree](https://web.ntnu.edu.tw/~algo/BinaryTree.html)

- [Binary Tree: Intro(簡介)](http://alrightchiu.github.io/SecondRound/binary-tree-introjian-jie.html)

- [資料結構與演算法 (JavaScript) - 56. Intro to tree](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25270498)

- [資料結構與演算法 (JavaScript) - 57. Build Max Heap](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25270572)

- [資料結構與演算法 (JavaScript) - 58. Heap Sort Algorithm](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25270738)

- [資料結構與演算法 (JavaScript) - 59. Implementing Heap Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25270786)

- [資料結構與演算法 (JavaScript) - 60. Overview of Heap Sort](https://www.udemy.com/course/algorithm-data-structure/learn/lecture/25270960)
