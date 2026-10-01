---
id: "java-en-function-navigableset-headset"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.headSet"
signature: "NavigableSet<E> headSet(E toElement, boolean inclusive)"
title: "NavigableSet.headSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.headSet

```java
NavigableSet<E> headSet(E toElement, boolean inclusive)
```

Returns a view of the portion of this set whose elements are less than
 (or equal to, if `inclusive` is true) `toElement`.  The
 returned set is backed by this set, so changes in the returned set are
 reflected in this set, and vice-versa.  The returned set supports all
 optional set operations that this set supports.

 

The returned set will throw an `IllegalArgumentException`
 on an attempt to insert an element outside its range.

**参数**

- **toElement** — high endpoint of the returned set
- **inclusive** — `true` if the high endpoint is to be included in the returned view

**返回**

- a view of the portion of this set whose elements are less than (or equal to, if `inclusive` is true) `toElement`

**异常**

- **ClassCastException** — if `toElement` is not compatible with this set's comparator (or, if the set has no comparator, if `toElement` does not implement `Comparable`). Implementations may, but are not required to, throw this exception if `toElement` cannot be compared to elements currently in the set.
- **NullPointerException** — if `toElement` is null and this set does not permit null elements
- **IllegalArgumentException** — if this set itself has a restricted range, and `toElement` lies outside the bounds of the range
