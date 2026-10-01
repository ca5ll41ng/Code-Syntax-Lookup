---
id: "java-en-function-navigablemap-submap"
language: "java"
lang: "en"
category: "function"
name: "NavigableMap.subMap"
signature: "NavigableMap<K,V> subMap(K fromKey, boolean fromInclusive, K toKey, boolean toInclusive)"
title: "NavigableMap.subMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap.subMap

```java
NavigableMap<K,V> subMap(K fromKey, boolean fromInclusive, K toKey, boolean toInclusive)
```

Returns a view of the portion of this map whose keys range from
 `fromKey` to `toKey`.  If `fromKey` and
 `toKey` are equal, the returned map is empty unless
 `fromInclusive` and `toInclusive` are both true.  The
 returned map is backed by this map, so changes in the returned map are
 reflected in this map, and vice-versa.  The returned map supports all
 optional map operations that this map supports.

 

The returned map will throw an `IllegalArgumentException`
 on an attempt to insert a key outside of its range, or to construct a
 submap either of whose endpoints lie outside its range.

**参数**

- **fromKey** — low endpoint of the keys in the returned map
- **fromInclusive** — `true` if the low endpoint is to be included in the returned view
- **toKey** — high endpoint of the keys in the returned map
- **toInclusive** — `true` if the high endpoint is to be included in the returned view

**返回**

- a view of the portion of this map whose keys range from `fromKey` to `toKey`

**异常**

- **ClassCastException** — if `fromKey` and `toKey` cannot be compared to one another using this map's comparator (or, if the map has no comparator, using natural ordering). Implementations may, but are not required to, throw this exception if `fromKey` or `toKey` cannot be compared to keys currently in the map.
- **NullPointerException** — if `fromKey` or `toKey` is null and this map does not permit null keys
- **IllegalArgumentException** — if `fromKey` is greater than `toKey`; or if this map itself has a restricted range, and `fromKey` or `toKey` lies outside the bounds of the range
