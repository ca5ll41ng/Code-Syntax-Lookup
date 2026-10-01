---
id: "java-en-function-navigableset-descendingset"
language: "java"
lang: "en"
category: "function"
name: "NavigableSet.descendingSet"
signature: "NavigableSet<E> descendingSet()"
title: "NavigableSet.descendingSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableSet.descendingSet

```java
NavigableSet<E> descendingSet()
```

Returns a reverse order view of the elements contained in this set.
 The descending set is backed by this set, so changes to the set are
 reflected in the descending set, and vice-versa.  If either set is
 modified while an iteration over either set is in progress (except
 through the iterator's own `remove` operation), the results of
 the iteration are undefined.

 

The returned set has an ordering equivalent to
 `reverseOrder(Comparator) Collections.reverseOrder``(comparator())`.
 The expression `s.descendingSet().descendingSet()` returns a
 view of `s` essentially equivalent to `s`.

**返回**

- a reverse order view of this set
