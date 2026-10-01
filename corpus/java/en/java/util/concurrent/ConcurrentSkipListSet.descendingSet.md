---
id: "java-en-function-concurrentskiplistset-descendingset"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListSet.descendingSet"
signature: "public NavigableSet<E> descendingSet()"
title: "ConcurrentSkipListSet.descendingSet"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListSet.descendingSet

```java
public NavigableSet<E> descendingSet()
```

Returns a reverse order view of the elements contained in this set.
 The descending set is backed by this set, so changes to the set are
 reflected in the descending set, and vice-versa.

 

The returned set has an ordering equivalent to
 `reverseOrder(Comparator) Collections.reverseOrder``(comparator())`.
 The expression `s.descendingSet().descendingSet()` returns a
 view of `s` essentially equivalent to `s`.

**返回**

- a reverse order view of this set
