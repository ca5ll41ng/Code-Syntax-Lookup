---
id: "java-en-function-copyonwritearraylist-spliterator"
language: "java"
lang: "en"
category: "function"
name: "CopyOnWriteArrayList.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "CopyOnWriteArrayList.spliterator"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CopyOnWriteArrayList.spliterator

```java
public Spliterator<E> spliterator()
```

Returns a `Spliterator` over the elements in this list.

 

The `Spliterator` reports `IMMUTABLE`,
 `ORDERED`, `SIZED`, and
 `SUBSIZED`.

 

The spliterator provides a snapshot of the state of the list
 when the spliterator was constructed. No synchronization is needed while
 operating on the spliterator.

**返回**

- a `Spliterator` over the elements in this list

> *Since 1.8*
