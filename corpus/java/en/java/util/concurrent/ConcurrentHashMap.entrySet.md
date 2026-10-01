---
id: "java-en-function-concurrenthashmap-entryset"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.entrySet"
signature: "public Set<Map.Entry<K,V>> entrySet()"
title: "ConcurrentHashMap.entrySet"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.entrySet

```java
public Set<Map.Entry<K,V>> entrySet()
```

Returns a `Set` view of the mappings contained in this map.
 The set is backed by the map, so changes to the map are
 reflected in the set, and vice-versa.  The set supports element
 removal, which removes the corresponding mapping from the map,
 via the `Iterator.remove`, `Set.remove`,
 `removeAll`, `retainAll`, and `clear`
 operations.

 

The view's iterators and spliterators are
 weakly consistent.

 

The view's `spliterator` reports `CONCURRENT`,
 `DISTINCT`, and `NONNULL`.

**返回**

- the set view
