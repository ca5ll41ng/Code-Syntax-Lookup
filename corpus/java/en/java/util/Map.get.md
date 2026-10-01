---
id: "java-en-function-map-get"
language: "java"
lang: "en"
category: "function"
name: "Map.get"
signature: "V get(Object key)"
title: "Map.get"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.get

```java
V get(Object key)
```

Returns the value to which the specified key is mapped,
 or `null` if this map contains no mapping for the key.

 

More formally, if this map contains a mapping from a key
 `k` to a value `v` such that
 `Objects.equals(key, k)`,
 then this method returns `v`; otherwise
 it returns `null`.  (There can be at most one such mapping.)

 

If this map permits null values, then a return value of
 `null` does not necessarily indicate that the map
 contains no mapping for the key; it's also possible that the map
 explicitly maps the key to `null`.  The `containsKey
 containsKey` operation may be used to distinguish these two cases.

**参数**

- **key** — the key whose associated value is to be returned

**返回**

- the value to which the specified key is mapped, or `null` if this map contains no mapping for the key

**异常**

- **ClassCastException** — if the key is of an inappropriate type for this map (`#optional-restrictions optional`)
- **NullPointerException** — if the specified key is null and this map does not permit null keys (`#optional-restrictions optional`)
