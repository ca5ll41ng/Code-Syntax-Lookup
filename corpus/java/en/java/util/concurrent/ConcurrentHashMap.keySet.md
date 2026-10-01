---
id: "java-en-function-concurrenthashmap-keyset"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.keySet"
signature: "public KeySetView<K,V> keySet()"
title: "ConcurrentHashMap.keySet"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.keySet

```java
public KeySetView<K,V> keySet()
```

Returns a `Set` view of the keys contained in this map.
 The set is backed by the map, so changes to the map are
 reflected in the set, and vice-versa. The set supports element
 removal, which removes the corresponding mapping from this map,
 via the `Iterator.remove`, `Set.remove`,
 `removeAll`, `retainAll`, and `clear`
 operations.  It does not support the `add` or
 `addAll` operations.

 

The view's iterators and spliterators are
 weakly consistent.

 

The view's `spliterator` reports `CONCURRENT`,
 `DISTINCT`, and `NONNULL`.

**返回**

- the set view
