---
id: "java-en-function-linkedlist-spliterator"
language: "java"
lang: "en"
category: "function"
name: "LinkedList.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "LinkedList.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedList.spliterator

```java
public Spliterator<E> spliterator()
```

Creates a late-binding
 and fail-fast `Spliterator` over the elements in this
 list.

 

The `Spliterator` reports `SIZED` and
 `ORDERED`.  Overriding implementations should document
 the reporting of additional characteristic values.

 The `Spliterator` additionally reports `SUBSIZED`
 and implements `trySplit` to permit limited parallelism..

**返回**

- a `Spliterator` over the elements in this list

> *Since 1.8*
