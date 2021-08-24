class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(...nodes) {
    this.head = null
    this.length = 0
    this._initial(nodes)
  }

  _initial(nodes) {
    nodes &&
      [...nodes].forEach((node) => {
        this.push(node)
      })
  }

  get(index) {
    if (typeof index !== 'number' || index < 0 || index > this.length - 1) {
      return null
    }

    let currentNode = this.head

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode.value
  }

  forEach(cb) {
    let currentNode = this.head

    for (let i = 0; i < this.length; i++) {
      cb(currentNode, i)

      if (currentNode.next) {
        currentNode = currentNode.next
      }
    }
  }

  push(value) {
    if (value === undefined) return

    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }

    this.length += 1
  }

  pop() {
    if (!this.head) return null
    if (this.length === 1) {
      const cache = this.head
      this.head = null
      this.length = 0
      return cache
    } else {
      let currentNode = this.head
      for (let i = 0; i < this.length - 2; i++) {
        currentNode = currentNode.next
      }
      const cache = currentNode.next
      currentNode.next = null
      this.length -= 1
      return cache
    }
  }

  unshift(value) {
    if (value === undefined) return

    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      const oldHead = this.head
      this.head = newNode
      this.head.next = oldHead
    }
    this.length += 1
  }

  shift() {
    if (!this.head) return null
    const cache = this.head

    if (this.length === 1) {
      this.head = null
    } else {
      this.head = this.head.next
    }
    this.length -= 1
    return cache
  }

  insertAt(index, value) {
    if (
      index < 0 ||
      index > this.length ||
      typeof index !== 'number' ||
      value === undefined
    ) {
      return null
    }

    if (this.head === null || index === this.length) {
      this.push(value)
    } else if (index === 0) {
      this.unshift(value)
    } else {
      const newNode = new Node(value)

      this.forEach((currentNode, currentIndex) => {
        if (currentIndex === index - 1) {
          newNode.next = currentNode.next
          currentNode.next = newNode
        }
      })

      this.length += 1
    }
  }

  removeAt(index) {
    if (
      this.length === 0 ||
      index < 0 ||
      index > this.length - 1 ||
      typeof index !== 'number'
    ) {
      return null
    }

    if (index === 0) {
      return this.shift()
    } else if (index === this.length - 1) {
      return this.pop()
    } else {
      let cache = null

      this.forEach((currentNode, currentIndex) => {
        if (currentIndex === index - 1) {
          cache = currentNode.next
          currentNode.next = currentNode.next.next
        }
      })

      this.length -= 1

      return cache
    }
  }
}
