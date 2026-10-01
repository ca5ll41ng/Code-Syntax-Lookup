---
id: "java-en-function-map-containskey"
language: "java"
lang: "en"
category: "function"
name: "Map.containsKey"
signature: "boolean containsKey(Object key)"
title: "Map.containsKey"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.containsKey

```java
boolean containsKey(Object key)
```

Returns `true` if this map contains a mapping for the specified
 key.  More formally, returns `true` if and only if
 this map contains a mapping for a key `k` such that
 `Objects.equals(key, k)`.  (There can be
 at most one such mapping.)

**参数**

- **key** — key whose presence in this map is to be tested

**返回**

- `true` if this map contains a mapping for the specified key

**异常**

- **ClassCastException** — if the key is of an inappropriate type for this map (`#optional-restrictions optional`)
- **NullPointerException** — if the specified key is null and this map does not permit null keys (`#optional-restrictions optional`)
