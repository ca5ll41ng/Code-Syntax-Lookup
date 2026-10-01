---
id: "java-en-function-sortedset-tailset"
language: "java"
lang: "en"
category: "function"
name: "SortedSet.tailSet"
signature: "SortedSet<E> tailSet(E fromElement)"
title: "SortedSet.tailSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedSet.tailSet

```java
SortedSet<E> tailSet(E fromElement)
```

Returns a view of the portion of this set whose elements are
 greater than or equal to `fromElement`.  The returned
 set is backed by this set, so changes in the returned set are
 reflected in this set, and vice-versa.  The returned set
 supports all optional set operations that this set supports.

 

The returned set will throw an `IllegalArgumentException`
 on an attempt to insert an element outside its range.

**参数**

- **fromElement** — low endpoint (inclusive) of the returned set

**返回**

- a view of the portion of this set whose elements are greater than or equal to `fromElement`

**异常**

- **ClassCastException** — if `fromElement` is not compatible with this set's comparator (or, if the set has no comparator, if `fromElement` does not implement `Comparable`). Implementations may, but are not required to, throw this exception if `fromElement` cannot be compared to elements currently in the set.
- **NullPointerException** — if `fromElement` is null and this set does not permit null elements
- **IllegalArgumentException** — if this set itself has a restricted range, and `fromElement` lies outside the bounds of the range
