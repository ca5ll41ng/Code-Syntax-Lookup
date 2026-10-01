---
id: "java-en-function-map-put"
language: "java"
lang: "en"
category: "function"
name: "Map.put"
signature: "V put(K key, V value)"
title: "Map.put"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.put

```java
V put(K key, V value)
```

Associates the specified value with the specified key in this map
 (optional operation).  If the map previously contained a mapping for
 the key, the old value is replaced by the specified value.  (A map
 `m` is said to contain a mapping for a key `k` if and only
 if `containsKey` would return
 `true`.)

**参数**

- **key** — key with which the specified value is to be associated
- **value** — value to be associated with the specified key

**返回**

- the previous value associated with `key`, or `null` if there was no mapping for `key`. (A `null` return can also indicate that the map previously associated `null` with `key`, if the implementation supports `null` values.)

**异常**

- **UnsupportedOperationException** — if the `put` operation is not supported by this map
- **ClassCastException** — if the class of the specified key or value prevents it from being stored in this map
- **NullPointerException** — if the specified key or value is null and this map does not permit null keys or values
- **IllegalArgumentException** — if some property of the specified key or value prevents it from being stored in this map
