---
id: "java-en-function-map-putall"
language: "java"
lang: "en"
category: "function"
name: "Map.putAll"
signature: "void putAll(Map<? extends K, ? extends V> m)"
title: "Map.putAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.putAll

```java
void putAll(Map<? extends K, ? extends V> m)
```

Copies all of the mappings from the specified map to this map
 (optional operation).  The effect of this call is equivalent to that
 of calling `put` on this map once
 for each mapping from key `k` to value `v` in the
 specified map.  The behavior of this operation is undefined if the specified map
 is modified while the operation is in progress. If the specified map has a defined
 encounter order,
 processing of its mappings generally occurs in that order.

**参数**

- **m** — mappings to be stored in this map

**异常**

- **UnsupportedOperationException** — if the `putAll` operation is not supported by this map
- **ClassCastException** — if the class of a key or value in the specified map prevents it from being stored in this map
- **NullPointerException** — if the specified map is null, or if this map does not permit null keys or values, and the specified map contains null keys or values
- **IllegalArgumentException** — if some property of a key or value in the specified map prevents it from being stored in this map
