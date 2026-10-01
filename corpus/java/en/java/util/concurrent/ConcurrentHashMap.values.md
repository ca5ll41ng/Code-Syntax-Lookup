---
id: "java-en-function-concurrenthashmap-values"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.values"
signature: "public Collection<V> values()"
title: "ConcurrentHashMap.values"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.values

```java
public Collection<V> values()
```

Returns a `Collection` view of the values contained in this map.
 The collection is backed by the map, so changes to the map are
 reflected in the collection, and vice-versa.  The collection
 supports element removal, which removes the corresponding
 mapping from this map, via the `Iterator.remove`,
 `Collection.remove`, `removeAll`,
 `retainAll`, and `clear` operations.  It does not
 support the `add` or `addAll` operations.

 

The view's iterators and spliterators are
 weakly consistent.

 

The view's `spliterator` reports `CONCURRENT`
 and `NONNULL`.

**返回**

- the collection view
