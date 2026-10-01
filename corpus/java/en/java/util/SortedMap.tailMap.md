---
id: "java-en-function-sortedmap-tailmap"
language: "java"
lang: "en"
category: "function"
name: "SortedMap.tailMap"
signature: "SortedMap<K,V> tailMap(K fromKey)"
title: "SortedMap.tailMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedMap.tailMap

```java
SortedMap<K,V> tailMap(K fromKey)
```

Returns a view of the portion of this map whose keys are
 greater than or equal to `fromKey`.  The returned map is
 backed by this map, so changes in the returned map are
 reflected in this map, and vice-versa.  The returned map
 supports all optional map operations that this map supports.

 

The returned map will throw an `IllegalArgumentException`
 on an attempt to insert a key outside its range.

**参数**

- **fromKey** — low endpoint (inclusive) of the keys in the returned map

**返回**

- a view of the portion of this map whose keys are greater than or equal to `fromKey`

**异常**

- **ClassCastException** — if `fromKey` is not compatible with this map's comparator (or, if the map has no comparator, if `fromKey` does not implement `Comparable`). Implementations may, but are not required to, throw this exception if `fromKey` cannot be compared to keys currently in the map.
- **NullPointerException** — if `fromKey` is null and this map does not permit null keys
- **IllegalArgumentException** — if this map itself has a restricted range, and `fromKey` lies outside the bounds of the range
