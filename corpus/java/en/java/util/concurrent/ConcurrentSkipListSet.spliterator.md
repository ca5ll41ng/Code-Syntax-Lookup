---
id: "java-en-function-concurrentskiplistset-spliterator"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListSet.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "ConcurrentSkipListSet.spliterator"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListSet.spliterator

```java
public Spliterator<E> spliterator()
```

Returns a `Spliterator` over the elements in this set.

 

The `Spliterator` reports `CONCURRENT`,
 `NONNULL`, `DISTINCT`,
 `SORTED` and `ORDERED`, with an
 encounter order that is ascending order.  Overriding implementations
 should document the reporting of additional characteristic values.

 

The `getComparator() spliterator's comparator`
 is `null` if the `comparator() set's comparator`
 is `null`.
 Otherwise, the spliterator's comparator is the same as or imposes the
 same total ordering as the set's comparator.

**返回**

- a `Spliterator` over the elements in this set

> *Since 1.8*
