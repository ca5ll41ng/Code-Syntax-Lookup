---
id: "java-en-function-sortedmap-values"
language: "java"
lang: "en"
category: "function"
name: "SortedMap.values"
signature: "Collection<V> values()"
title: "SortedMap.values"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedMap.values

```java
Collection<V> values()
```

Returns a `Collection` view of the values contained in this map.
 The collection's iterator returns the values in ascending order
 of the corresponding keys.
 The collection is backed by the map, so changes to the map are
 reflected in the collection, and vice-versa.  If the map is
 modified while an iteration over the collection is in progress
 (except through the iterator's own `remove` operation),
 the results of the iteration are undefined.  The collection
 supports element removal, which removes the corresponding
 mapping from the map, via the `Iterator.remove`,
 `Collection.remove`, `removeAll`,
 `retainAll` and `clear` operations.  It does not
 support the `add` or `addAll` operations.

**返回**

- a collection view of the values contained in this map, sorted in ascending key order
