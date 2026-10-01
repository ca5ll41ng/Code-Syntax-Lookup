---
id: "java-en-function-priorityqueue-spliterator"
language: "java"
lang: "en"
category: "function"
name: "PriorityQueue.spliterator"
signature: "public final Spliterator<E> spliterator()"
title: "PriorityQueue.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PriorityQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PriorityQueue.spliterator

```java
public final Spliterator<E> spliterator()
```

Creates a late-binding
 and fail-fast `Spliterator` over the elements in this
 queue. The spliterator does not traverse elements in any particular order
 (the `ORDERED ORDERED` characteristic is not reported).

 

The `Spliterator` reports `SIZED`,
 `SUBSIZED`, and `NONNULL`.
 Overriding implementations should document the reporting of additional
 characteristic values.

**返回**

- a `Spliterator` over the elements in this queue

> *Since 1.8*
