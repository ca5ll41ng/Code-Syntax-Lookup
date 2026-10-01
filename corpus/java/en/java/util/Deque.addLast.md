---
id: "java-en-function-deque-addlast"
language: "java"
lang: "en"
category: "function"
name: "Deque.addLast"
signature: "void addLast(E e)"
title: "Deque.addLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.addLast

```java
void addLast(E e)
```

Inserts the specified element at the end of this deque if it is
 possible to do so immediately without violating capacity restrictions,
 throwing an `IllegalStateException` if no space is currently
 available.  When using a capacity-restricted deque, it is generally
 preferable to use method `offerLast`.

 

This method is equivalent to `add`.

**参数**

- **e** — the element to add

**异常**

- **IllegalStateException** — if the element cannot be added at this time due to capacity restrictions
- **ClassCastException** — if the class of the specified element prevents it from being added to this deque
- **NullPointerException** — if the specified element is null and this deque does not permit null elements
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this deque
