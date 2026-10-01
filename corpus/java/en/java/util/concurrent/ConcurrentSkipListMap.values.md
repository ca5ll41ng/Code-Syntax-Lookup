---
id: "java-en-function-concurrentskiplistmap-values"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.values"
signature: "public Collection<V> values()"
title: "ConcurrentSkipListMap.values"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.values

```java
public Collection<V> values()
```

Returns a `Collection` view of the values contained in this map.
 

The collection's iterator returns the values in ascending order
 of the corresponding keys. The collections's spliterator additionally
 reports `CONCURRENT`, `NONNULL` and
 `ORDERED`, with an encounter order that is ascending
 order of the corresponding keys.

 

The collection is backed by the map, so changes to the map are
 reflected in the collection, and vice-versa.  The collection
 supports element removal, which removes the corresponding
 mapping from the map, via the `Iterator.remove`,
 `Collection.remove`, `removeAll`,
 `retainAll` and `clear` operations.  It does not
 support the `add` or `addAll` operations.

 

The view's iterators and spliterators are
 weakly consistent.
