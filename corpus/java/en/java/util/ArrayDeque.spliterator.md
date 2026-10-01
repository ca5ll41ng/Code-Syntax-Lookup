---
id: "java-en-function-arraydeque-spliterator"
language: "java"
lang: "en"
category: "function"
name: "ArrayDeque.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "ArrayDeque.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayDeque.spliterator

```java
public Spliterator<E> spliterator()
```

Creates a late-binding
 and fail-fast `Spliterator` over the elements in this
 deque.

 

The `Spliterator` reports `SIZED`,
 `SUBSIZED`, `ORDERED`, and
 `NONNULL`.  Overriding implementations should document
 the reporting of additional characteristic values.

**返回**

- a `Spliterator` over the elements in this deque

> *Since 1.8*
