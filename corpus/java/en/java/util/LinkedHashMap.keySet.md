---
id: "java-en-function-linkedhashmap-keyset"
language: "java"
lang: "en"
category: "function"
name: "LinkedHashMap.keySet"
signature: "public Set<K> keySet()"
title: "LinkedHashMap.keySet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedHashMap.keySet

```java
public Set<K> keySet()
```

Returns a `Set` view of the keys contained in this map. The encounter
 order of the keys in the view matches the encounter order of mappings of
 this map. The set is backed by the map, so changes to the map are
 reflected in the set, and vice-versa.  If the map is modified
 while an iteration over the set is in progress (except through
 the iterator's own `remove` operation), the results of
 the iteration are undefined.  The set supports element removal,
 which removes the corresponding mapping from the map, via the
 `Iterator.remove`, `Set.remove`,
 `removeAll`, `retainAll`, and `clear`
 operations.  It does not support the `add` or `addAll`
 operations.
 Its `Spliterator` typically provides faster sequential
 performance but much poorer parallel performance than that of
 `HashMap`.

**返回**

- a set view of the keys contained in this map
