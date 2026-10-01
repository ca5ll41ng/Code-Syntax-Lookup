---
id: "java-en-function-arraydeque-iterator"
language: "java"
lang: "en"
category: "function"
name: "ArrayDeque.iterator"
signature: "public Iterator<E> iterator()"
title: "ArrayDeque.iterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayDeque.iterator

```java
public Iterator<E> iterator()
```

Returns an iterator over the elements in this deque.  The elements
 will be ordered from first (head) to last (tail).  This is the same
 order that elements would be dequeued (via successive calls to
 `remove` or popped (via successive calls to `pop`).

**返回**

- an iterator over the elements in this deque
