---
id: "java-en-function-concurrentlinkeddeque-spliterator"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentLinkedDeque.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "ConcurrentLinkedDeque.spliterator"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedDeque.spliterator

```java
public Spliterator<E> spliterator()
```

Returns a `Spliterator` over the elements in this deque.

 

The returned spliterator is
 weakly consistent.

 

The `Spliterator` reports `CONCURRENT`,
 `ORDERED`, and `NONNULL`.

 The `Spliterator` implements `trySplit` to permit limited
 parallelism.

**返回**

- a `Spliterator` over the elements in this deque

> *Since 1.8*
