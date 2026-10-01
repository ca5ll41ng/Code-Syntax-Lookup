---
id: "java-en-function-linkedhashset-spliterator"
language: "java"
lang: "en"
category: "function"
name: "LinkedHashSet.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "LinkedHashSet.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedHashSet.spliterator

```java
public Spliterator<E> spliterator()
```

Creates a late-binding
 and fail-fast `Spliterator` over the elements in this set.

 

The `Spliterator` reports `SIZED`,
 `DISTINCT`, and `ORDERED`.  Implementations
 should document the reporting of additional characteristic values.

 The implementation creates a
 late-binding spliterator
 from the set's `Iterator`.  The spliterator inherits the
 fail-fast properties of the set's iterator.
 The created `Spliterator` additionally reports
 `SUBSIZED`.

**返回**

- a `Spliterator` over the elements in this set

> *Since 1.8*
