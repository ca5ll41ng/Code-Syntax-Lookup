---
id: "java-en-function-navigableset-subset"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.subSet"
signature: "NavigableSet<E> subSet(E fromElement, boolean fromInclusive, E toElement, boolean toInclusive)"
title: "NavigableSet.subSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.subSet

```java
NavigableSet<E> subSet(E fromElement, boolean fromInclusive, E toElement, boolean toInclusive)
```

Returns a view of the portion of this set whose elements range from
 `fromElement` to `toElement`.  If `fromElement` and
 `toElement` are equal, the returned set is empty unless `fromInclusive` and `toInclusive` are both true.  The returned set
 is backed by this set, so changes in the returned set are reflected in
 this set, and vice-versa.  The returned set supports all optional set
 operations that this set supports.

 

The returned set will throw an `IllegalArgumentException`
 on an attempt to insert an element outside its range.

**参数**

- **fromElement** — low endpoint of the returned set
- **fromInclusive** — `true` if the low endpoint is to be included in the returned view
- **toElement** — high endpoint of the returned set
- **toInclusive** — `true` if the high endpoint is to be included in the returned view

**返回**

- a view of the portion of this set whose elements range from `fromElement`, inclusive, to `toElement`, exclusive

**异常**

- **ClassCastException** — if `fromElement` and `toElement` cannot be compared to one another using this set's comparator (or, if the set has no comparator, using natural ordering).  Implementations may, but are not required to, throw this exception if `fromElement` or `toElement` cannot be compared to elements currently in the set.
- **NullPointerException** — if `fromElement` or `toElement` is null and this set does not permit null elements
- **IllegalArgumentException** — if `fromElement` is greater than `toElement`; or if this set itself has a restricted range, and `fromElement` or `toElement` lies outside the bounds of the range.
