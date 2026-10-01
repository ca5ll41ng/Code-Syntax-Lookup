---
id: "java-en-function-navigablemap-descendingmap"
language: "java"
lang: "en"
category: "function"
name: "NavigableMap.descendingMap"
signature: "NavigableMap<K,V> descendingMap()"
title: "NavigableMap.descendingMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap.descendingMap

```java
NavigableMap<K,V> descendingMap()
```

Returns a reverse order view of the mappings contained in this map.
 The descending map is backed by this map, so changes to the map are
 reflected in the descending map, and vice-versa.  If either map is
 modified while an iteration over a collection view of either map
 is in progress (except through the iterator's own `remove`
 operation), the results of the iteration are undefined.

 

The returned map has an ordering equivalent to
 `reverseOrder(Comparator) Collections.reverseOrder``(comparator())`.
 The expression `m.descendingMap().descendingMap()` returns a
 view of `m` essentially equivalent to `m`.

**返回**

- a reverse order view of this map
