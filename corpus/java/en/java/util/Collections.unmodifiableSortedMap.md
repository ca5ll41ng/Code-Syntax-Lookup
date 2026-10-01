---
id: "java-en-function-collections-unmodifiablesortedmap"
language: "java"
lang: "en"
category: "function"
name: "Collections.unmodifiableSortedMap"
signature: "public static <K,V> SortedMap<K,V> unmodifiableSortedMap(SortedMap<K, ? extends V> m)"
title: "Collections.unmodifiableSortedMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.unmodifiableSortedMap

```java
public static <K,V> SortedMap<K,V> unmodifiableSortedMap(SortedMap<K, ? extends V> m)
```

Returns an unmodifiable view of the
 specified sorted map. Query operations on the returned sorted map "read through"
 to the specified sorted map.  Attempts to modify the returned
 sorted map, whether direct, via its collection views, or via its
 `subMap`, `headMap`, or `tailMap` views, result in
 an `UnsupportedOperationException`.

 The returned sorted map will be serializable if the specified sorted map
 is serializable.

**参数**

- **the** — class of the map keys
- **the** — class of the map values
- **m** — the sorted map for which an unmodifiable view is to be returned.

**返回**

- an unmodifiable view of the specified sorted map.
