---
id: "java-en-function-concurrentskiplistmap-keyset"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.keySet"
signature: "public NavigableSet<K> keySet()"
title: "ConcurrentSkipListMap.keySet"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.keySet

```java
public NavigableSet<K> keySet()
```

Returns a `NavigableSet` view of the keys contained in this map.

 

The set's iterator returns the keys in ascending order.
 The set's spliterator additionally reports `CONCURRENT`,
 `NONNULL`, `SORTED` and
 `ORDERED`, with an encounter order that is ascending
 key order.

 

The `getComparator() spliterator's comparator`
 is `null` if the `comparator() map's comparator`
 is `null`.
 Otherwise, the spliterator's comparator is the same as or imposes the
 same total ordering as the map's comparator.

 

The set is backed by the map, so changes to the map are
 reflected in the set, and vice-versa.  The set supports element
 removal, which removes the corresponding mapping from the map,
 via the `Iterator.remove`, `Set.remove`,
 `removeAll`, `retainAll`, and `clear`
 operations.  It does not support the `add` or `addAll`
 operations.

 

The view's iterators and spliterators are
 weakly consistent.

 

This method is equivalent to method `navigableKeySet`.

**返回**

- a navigable set view of the keys in this map
