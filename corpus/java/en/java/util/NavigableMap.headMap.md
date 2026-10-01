---
id: "java-en-function-navigablemap-headmap"
language: "java"
lang: "en"
category: "function"
name: "NavigableMap.headMap"
signature: "NavigableMap<K,V> headMap(K toKey, boolean inclusive)"
title: "NavigableMap.headMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap.headMap

```java
NavigableMap<K,V> headMap(K toKey, boolean inclusive)
```

Returns a view of the portion of this map whose keys are less than (or
 equal to, if `inclusive` is true) `toKey`.  The returned
 map is backed by this map, so changes in the returned map are reflected
 in this map, and vice-versa.  The returned map supports all optional
 map operations that this map supports.

 

The returned map will throw an `IllegalArgumentException`
 on an attempt to insert a key outside its range.

**参数**

- **toKey** — high endpoint of the keys in the returned map
- **inclusive** — `true` if the high endpoint is to be included in the returned view

**返回**

- a view of the portion of this map whose keys are less than (or equal to, if `inclusive` is true) `toKey`

**异常**

- **ClassCastException** — if `toKey` is not compatible with this map's comparator (or, if the map has no comparator, if `toKey` does not implement `Comparable`). Implementations may, but are not required to, throw this exception if `toKey` cannot be compared to keys currently in the map.
- **NullPointerException** — if `toKey` is null and this map does not permit null keys
- **IllegalArgumentException** — if this map itself has a restricted range, and `toKey` lies outside the bounds of the range
