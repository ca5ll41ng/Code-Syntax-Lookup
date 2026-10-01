---
id: "java-en-function-priorityblockingqueue-spliterator"
language: "java"
lang: "en"
category: "function"
name: "PriorityBlockingQueue.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "PriorityBlockingQueue.spliterator"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/PriorityBlockingQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PriorityBlockingQueue.spliterator

```java
public Spliterator<E> spliterator()
```

Returns a `Spliterator` over the elements in this queue.
 The spliterator does not traverse elements in any particular order
 (the `ORDERED ORDERED` characteristic is not reported).

 

The returned spliterator is
 weakly consistent.

 

The `Spliterator` reports `SIZED` and
 `NONNULL`.

 The `Spliterator` additionally reports `SUBSIZED`.

**返回**

- a `Spliterator` over the elements in this queue

> *Since 1.8*
