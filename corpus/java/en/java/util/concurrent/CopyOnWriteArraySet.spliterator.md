---
id: "java-en-function-copyonwritearrayset-spliterator"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArraySet.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "CopyOnWriteArraySet.spliterator"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArraySet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArraySet.spliterator

```java
public Spliterator<E> spliterator()
```

Returns a `Spliterator` over the elements in this set in the order
 in which these elements were added.

 

The `Spliterator` reports `IMMUTABLE`,
 `DISTINCT`, `SIZED`, and
 `SUBSIZED`.

 

The spliterator provides a snapshot of the state of the set
 when the spliterator was constructed. No synchronization is needed while
 operating on the spliterator.

**返回**

- a `Spliterator` over the elements in this set

> *Since 1.8*
