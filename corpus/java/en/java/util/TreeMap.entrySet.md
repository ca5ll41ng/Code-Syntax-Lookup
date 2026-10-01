---
id: "java-en-function-treemap-entryset"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.entrySet"
signature: "public Set<Map.Entry<K,V>> entrySet()"
title: "TreeMap.entrySet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.entrySet

```java
public Set<Map.Entry<K,V>> entrySet()
```

Returns a `Set` view of the mappings contained in this map.

 

The set's iterator returns the entries in ascending key order. The
 set's spliterator is
 late-binding,
 fail-fast, and additionally reports `SORTED` and
 `ORDERED` with an encounter order that is ascending key
 order.

 

The set is backed by the map, so changes to the map are
 reflected in the set, and vice-versa.  If the map is modified
 while an iteration over the set is in progress (except through
 the iterator's own `remove` operation, or through the
 `setValue` operation on a map entry returned by the
 iterator) the results of the iteration are undefined.  The set
 supports element removal, which removes the corresponding
 mapping from the map, via the `Iterator.remove`,
 `Set.remove`, `removeAll`, `retainAll` and
 `clear` operations.  It does not support the
 `add` or `addAll` operations.

**返回**

- {@inheritDoc SortedMap}
