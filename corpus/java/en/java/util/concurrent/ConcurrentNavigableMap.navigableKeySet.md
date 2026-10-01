---
id: "java-en-function-concurrentnavigablemap-navigablekeyset"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentNavigableMap.navigableKeySet"
signature: "NavigableSet<K> navigableKeySet()"
title: "ConcurrentNavigableMap.navigableKeySet"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentNavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentNavigableMap.navigableKeySet

```java
NavigableSet<K> navigableKeySet()
```

Returns a `NavigableSet` view of the keys contained in this map.
 The set's iterator returns the keys in ascending order.
 The set is backed by the map, so changes to the map are
 reflected in the set, and vice-versa.  The set supports element
 removal, which removes the corresponding mapping from the map,
 via the `Iterator.remove`, `Set.remove`,
 `removeAll`, `retainAll`, and `clear`
 operations.  It does not support the `add` or `addAll`
 operations.

 

The view's iterators and spliterators are
 weakly consistent.

**返回**

- a navigable set view of the keys in this map
