---
id: "java-en-function-deque-offerfirst"
language: "java"
lang: "en"
category: "function"
name: "Deque.offerFirst"
signature: "boolean offerFirst(E e)"
title: "Deque.offerFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deque.offerFirst

```java
boolean offerFirst(E e)
```

Inserts the specified element at the front of this deque unless it would
 violate capacity restrictions.  When using a capacity-restricted deque,
 this method is generally preferable to the `addFirst` method,
 which can fail to insert an element only by throwing an exception.

**参数**

- **e** — the element to add

**返回**

- `true` if the element was added to this deque, else `false`

**异常**

- **ClassCastException** — if the class of the specified element prevents it from being added to this deque
- **NullPointerException** — if the specified element is null and this deque does not permit null elements
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this deque
