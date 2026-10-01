---
id: "java-en-function-concurrentskiplistmap-entryset"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.entrySet"
signature: "public Set<Map.Entry<K,V>> entrySet()"
title: "ConcurrentSkipListMap.entrySet"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.entrySet

```java
public Set<Map.Entry<K,V>> entrySet()
```

Returns a `Set` view of the mappings contained in this map.

 

The set's iterator returns the entries in ascending key order.  The
 set's spliterator additionally reports `CONCURRENT`,
 `NONNULL`, `SORTED` and
 `ORDERED`, with an encounter order that is ascending
 key order.

 

The set is backed by the map, so changes to the map are
 reflected in the set, and vice-versa.  The set supports element
 removal, which removes the corresponding mapping from the map,
 via the `Iterator.remove`, `Set.remove`,
 `removeAll`, `retainAll` and `clear`
 operations.  It does not support the `add` or
 `addAll` operations.

 

The view's iterators and spliterators are
 weakly consistent.

 

The `Map.Entry` elements traversed by the `iterator`
 or `spliterator` do not support the `setValue`
 operation.

**返回**

- a set view of the mappings contained in this map, sorted in ascending key order
