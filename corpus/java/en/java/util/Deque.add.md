---
id: "java-en-function-deque-add"
language: "java"
lang: "en"
category: "function"
name: "Deque.add"
signature: "boolean add(E e)"
title: "Deque.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.add

```java
boolean add(E e)
```

Inserts the specified element into the queue represented by this deque
 (in other words, at the tail of this deque) if it is possible to do so
 immediately without violating capacity restrictions, returning
 `true` upon success and throwing an
 `IllegalStateException` if no space is currently available.
 When using a capacity-restricted deque, it is generally preferable to
 use `offer(Object) offer`.

 

This method is equivalent to `addLast`.

**参数**

- **e** — the element to add

**返回**

- `true` (as specified by `add`)

**异常**

- **IllegalStateException** — if the element cannot be added at this time due to capacity restrictions
- **ClassCastException** — if the class of the specified element prevents it from being added to this deque
- **NullPointerException** — if the specified element is null and this deque does not permit null elements
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this deque
