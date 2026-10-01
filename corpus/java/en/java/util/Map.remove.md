---
id: "java-en-function-map-remove"
language: "java"
lang: "en"
category: "function"
name: "Map.remove"
signature: "V remove(Object key)"
title: "Map.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.remove

```java
V remove(Object key)
```

Removes the mapping for a key from this map if it is present
 (optional operation).   More formally, if this map contains a mapping
 from key `k` to value `v` such that
 `Objects.equals(key, k)`, that mapping
 is removed.  (The map can contain at most one such mapping.)

 

Returns the value to which this map previously associated the key,
 or `null` if the map contained no mapping for the key.

 

If this map permits null values, then a return value of
 `null` does not necessarily indicate that the map
 contained no mapping for the key; it's also possible that the map
 explicitly mapped the key to `null`.

 

The map will not contain a mapping for the specified key once the
 call returns.

**参数**

- **key** — key whose mapping is to be removed from the map

**返回**

- the previous value associated with `key`, or `null` if there was no mapping for `key`.

**异常**

- **UnsupportedOperationException** — if the `remove` operation is not supported by this map
- **ClassCastException** — if the key is of an inappropriate type for this map (`#optional-restrictions optional`)
- **NullPointerException** — if the specified key is null and this map does not permit null keys (`#optional-restrictions optional`)
