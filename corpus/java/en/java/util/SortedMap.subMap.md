---
id: "java-en-function-sortedmap-submap"
language: "java"
lang: "en"
category: "function"
name: "SortedMap.subMap"
signature: "SortedMap<K,V> subMap(K fromKey, K toKey)"
title: "SortedMap.subMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedMap.subMap

```java
SortedMap<K,V> subMap(K fromKey, K toKey)
```

Returns a view of the portion of this map whose keys range from
 `fromKey`, inclusive, to `toKey`, exclusive.  (If
 `fromKey` and `toKey` are equal, the returned map
 is empty.)  The returned map is backed by this map, so changes
 in the returned map are reflected in this map, and vice-versa.
 The returned map supports all optional map operations that this
 map supports.

 

The returned map will throw an `IllegalArgumentException`
 on an attempt to insert a key outside its range.

**参数**

- **fromKey** — low endpoint (inclusive) of the keys in the returned map
- **toKey** — high endpoint (exclusive) of the keys in the returned map

**返回**

- a view of the portion of this map whose keys range from `fromKey`, inclusive, to `toKey`, exclusive

**异常**

- **ClassCastException** — if `fromKey` and `toKey` cannot be compared to one another using this map's comparator (or, if the map has no comparator, using natural ordering). Implementations may, but are not required to, throw this exception if `fromKey` or `toKey` cannot be compared to keys currently in the map.
- **NullPointerException** — if `fromKey` or `toKey` is null and this map does not permit null keys
- **IllegalArgumentException** — if `fromKey` is greater than `toKey`; or if this map itself has a restricted range, and `fromKey` or `toKey` lies outside the bounds of the range
