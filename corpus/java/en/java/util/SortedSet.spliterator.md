---
id: "java-en-function-sortedset-spliterator"
language: "java"
lang: "en"
category: "function"
name: "SortedSet.spliterator"
signature: "default Spliterator<E> spliterator()"
title: "SortedSet.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedSet.spliterator

```java
default Spliterator<E> spliterator()
```

Creates a `Spliterator` over the elements in this sorted set.

 

The `Spliterator` reports `DISTINCT`,
 `SORTED` and `ORDERED`.
 Implementations should document the reporting of additional
 characteristic values.

 

The spliterator's comparator (see
 `getComparator`) must be `null` if
 the sorted set's comparator (see `comparator`) is `null`.
 Otherwise, the spliterator's comparator must be the same as or impose the
 same total ordering as the sorted set's comparator.

 The default implementation creates a
 late-binding spliterator
 from the sorted set's `Iterator`.  The spliterator inherits the
 fail-fast properties of the set's iterator.  The
 spliterator's comparator is the same as the sorted set's comparator.
 

 The created `Spliterator` additionally reports
 `SIZED`.

 The created `Spliterator` additionally reports
 `SUBSIZED`.

**返回**

- a `Spliterator` over the elements in this sorted set

> *Since 1.8*
