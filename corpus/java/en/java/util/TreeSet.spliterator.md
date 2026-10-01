---
id: "java-en-function-treeset-spliterator"
language: "java"
lang: "en"
category: "function"
name: "TreeSet.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "TreeSet.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeSet.spliterator

```java
public Spliterator<E> spliterator()
```

Creates a late-binding
 and fail-fast `Spliterator` over the elements in this
 set.

 

The `Spliterator` reports `SIZED`,
 `DISTINCT`, `SORTED`, and
 `ORDERED`.  Overriding implementations should document
 the reporting of additional characteristic values.

 

The spliterator's comparator (see
 `getComparator`) is `null` if
 the tree set's comparator (see `comparator`) is `null`.
 Otherwise, the spliterator's comparator is the same as or imposes the
 same total ordering as the tree set's comparator.

**返回**

- a `Spliterator` over the elements in this set

> *Since 1.8*
