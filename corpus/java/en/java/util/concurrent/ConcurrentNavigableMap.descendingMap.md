---
id: "java-en-function-concurrentnavigablemap-descendingmap"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentNavigableMap.descendingMap"
signature: "ConcurrentNavigableMap<K,V> descendingMap()"
title: "ConcurrentNavigableMap.descendingMap"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentNavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentNavigableMap.descendingMap

```java
ConcurrentNavigableMap<K,V> descendingMap()
```

Returns a reverse order view of the mappings contained in this map.
 The descending map is backed by this map, so changes to the map are
 reflected in the descending map, and vice-versa.

 

The returned map has an ordering equivalent to
 `reverseOrder(Comparator) Collections.reverseOrder``(comparator())`.
 The expression `m.descendingMap().descendingMap()` returns a
 view of `m` essentially equivalent to `m`.

**返回**

- a reverse order view of this map
