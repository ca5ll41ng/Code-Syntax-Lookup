---
id: "java-en-function-linkedblockingdeque-remove"
language: "java"
lang: "en"
category: "function"
name: "LinkedBlockingDeque.remove"
signature: "public E remove()"
title: "LinkedBlockingDeque.remove"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedBlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedBlockingDeque.remove

```java
public E remove()
```

Retrieves and removes the head of the queue represented by this deque.
 This method differs from `poll` only in that it throws an
 exception if this deque is empty.

 

This method is equivalent to `removeFirst() removeFirst`.

**返回**

- the head of the queue represented by this deque

**异常**

- **NoSuchElementException** — if this deque is empty
