---
id: "java-en-function-arrayblockingqueue-spliterator"
language: "java"
lang: "en"
category: "function"
name: "ArrayBlockingQueue.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "ArrayBlockingQueue.spliterator"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ArrayBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayBlockingQueue.spliterator

```java
public Spliterator<E> spliterator()
```

Returns a `Spliterator` over the elements in this queue.

 

The returned spliterator is
 weakly consistent.

 

The `Spliterator` reports `CONCURRENT`,
 `ORDERED`, and `NONNULL`.

 The `Spliterator` implements `trySplit` to permit limited
 parallelism.

**返回**

- a `Spliterator` over the elements in this queue

> *Since 1.8*
