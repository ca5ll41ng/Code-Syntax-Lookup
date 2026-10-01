---
id: "java-en-function-deque-offer"
language: "java"
lang: "en"
category: "function"
name: "Deque.offer"
signature: "boolean offer(E e)"
title: "Deque.offer"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.offer

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

 

This method is equivalent to `offerLast`.

**参数**

- **e** — the element to add

**返回**

- `true` if the element was added to this deque, else `false`

**异常**

- **ClassCastException** — if the class of the specified element prevents it from being added to this deque
- **NullPointerException** — if the specified element is null and this deque does not permit null elements
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this deque
