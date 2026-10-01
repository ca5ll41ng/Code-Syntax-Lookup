---
id: "java-en-function-map-getordefault"
language: "java"
lang: "en"
category: "function"
name: "Map.getOrDefault"
signature: "default V getOrDefault(Object key, V defaultValue)"
title: "Map.getOrDefault"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.getOrDefault

```java
default V getOrDefault(Object key, V defaultValue)
```

Returns the value to which the specified key is mapped, or
 `defaultValue` if this map contains no mapping for the key.

 The default implementation makes no guarantees about synchronization
 or atomicity properties of this method. Any implementation providing
 atomicity guarantees must override this method and document its
 concurrency properties.

**参数**

- **key** — the key whose associated value is to be returned
- **defaultValue** — the default mapping of the key

**返回**

- the value to which the specified key is mapped, or `defaultValue` if this map contains no mapping for the key

**异常**

- **ClassCastException** — if the key is of an inappropriate type for this map (`#optional-restrictions optional`)
- **NullPointerException** — if the specified key is null and this map does not permit null keys (`#optional-restrictions optional`)

> *Since 1.8*
