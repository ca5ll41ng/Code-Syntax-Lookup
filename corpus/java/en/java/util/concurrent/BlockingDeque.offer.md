---
id: "java-en-function-blockingdeque-offer"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.offer"
signature: "boolean offer(E e)"
title: "BlockingDeque.offer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.offer

```java
boolean offer(E e)
```

Inserts the specified element into the queue represented by this deque
 (in other words, at the tail of this deque) if it is possible to do so
 immediately without violating capacity restrictions, returning
 `true` upon success and `false` if no space is currently
 available.  When using a capacity-restricted deque, this method is
 generally preferable to the `add` method, which can fail to
 insert an element only by throwing an exception.

 

This method is equivalent to `offerLast(Object) offerLast`.

**参数**

- **e** — the element to add

**异常**

- **ClassCastException** — if the class of the specified element prevents it from being added to this deque
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this deque
