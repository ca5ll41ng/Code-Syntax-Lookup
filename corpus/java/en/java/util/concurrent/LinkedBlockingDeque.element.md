---
id: "java-en-function-linkedblockingdeque-element"
language: "java"
lang: "en"
category: "function"
name: "LinkedBlockingDeque.element"
signature: "public E element()"
title: "LinkedBlockingDeque.element"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedBlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedBlockingDeque.element

```java
public E element()
```

Retrieves, but does not remove, the head of the queue represented by
 this deque.  This method differs from `peek` only in that
 it throws an exception if this deque is empty.

 

This method is equivalent to `getFirst() getFirst`.

**返回**

- the head of the queue represented by this deque

**异常**

- **NoSuchElementException** — if this deque is empty
